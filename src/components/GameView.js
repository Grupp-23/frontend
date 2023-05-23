import React, { setState, useRef } from "react";

import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import SocketClient from "../services/SocketClient";
import Projectile from "../components/Projectile.js";

/**
 * Represents the game world.
 * @component
 */
class GameView extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { allyCharacters: {}, enemyCharacters: {}, projectiles: {}, timeouts: {} };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        SocketClient.saveUpdate(this.update);
    }

    /**
     * Updates the game state based on the JSON object.
     * @param {Object} jsonObject - The JSON object containing the game state that should be updated.
     */
    update(jsonObject) {
        const action = jsonObject.method;

        switch (action) {
            case "move":
                this.setCharacterPosition(jsonObject.team, jsonObject.id, jsonObject.pos);
                break;

            case "characterdmg":
                break;

            case "characterdead":
                this.removeCharacter(jsonObject.team, jsonObject.id);
                break;

            case "spawn":
                this.spawnCharacter(jsonObject.type, jsonObject.team, jsonObject.id, jsonObject.pos);
                break;

            case "basedmg":
                break;
            
            case "projectile":
                this.spawnProjectile(jsonObject.id, jsonObject.direction, jsonObject.speed, jsonObject.x, jsonObject.y, jsonObject.distance);
                break;

            default:
                break;
        }
    }

    spawnProjectile(id, direction, speed, x, y, distance) {
        const timeoutId = setTimeout(() => {
            const { projectiles, timeouts } = this.state;
            delete projectiles[id];
            delete timeouts[id];
        
            this.setState({ projectiles, timeouts });
        }, distance*15/speed);
        
        this.setState(prevState => ({
            projectiles: {
                ...prevState.projectiles,
                [id]: { x: x, y: y, direction: direction, speed: speed }
            },
            timeouts: {
                ...prevState.timeouts,
                [id]: timeoutId
            }
        }));
    }

    /**
     * Spawns a character.
     * @param {number} characterType - The type of character.
     * @param {number} team - The team of the character.
     * @param {number} id - The id of the character.
     * @param {object} position - The position of the character.
     */
    spawnCharacter(characterType, team, id, position) {
        if (team === 0) {
            this.setState(prevState => ({
                allyCharacters: {
                    ...prevState.allyCharacters,
                    [id]: { type: characterType, position: position }
                }
            }));
        }
        else if (team === 1) {
            this.setState(prevState => ({
                enemyCharacters: {
                    ...prevState.enemyCharacters,
                    [id]: { type: characterType, position: position }
                }
            }));
        }
    }

    /**
     * Set the character position based on the team and ID.
     * @param {number} team - The team of the character.
     * @param {number} id - The ID of the character.
     * @param {Object} newPosition - The new position of the character.
     */
    setCharacterPosition(team, id, newPosition) {
        if (team === 0) {
            this.setState(prevState => ({
                allyCharacters: {
                    ...prevState.allyCharacters,
                    [id]: { ...prevState.allyCharacters[id], position: newPosition }
                }
            }));
        }
        else if (team === 1) {
            this.setState(prevState => ({
                enemyCharacters: {
                    ...prevState.enemyCharacters,
                    [id]: { ...prevState.enemyCharacters[id], position: newPosition }
                }
            }));
        }
    }

    /**
     * Removes a character based on the team and ID.
     * @param {number} team - The team of the character.
     * @param {number} id - The ID of the character.
     */
    removeCharacter(team, id) {
        if (team === 0) {
            this.setState(prevState => {
                console.log(this.state.allyCharacters);
                const newAllyCharacters = { ...prevState.allyCharacters };
                delete newAllyCharacters[id];
                console.log(newAllyCharacters);
                return { allyCharacters: newAllyCharacters };
            });
        }
        else if (team === 1) {
            this.setState(prevState => {
                const newEnemyCharacters = { ...prevState.enemyCharacters };
                delete newEnemyCharacters[id];
        
                return { enemyCharacters: newEnemyCharacters };
            });
        }
    }
    
    render() {
        return (
            <div id="gameview">
                <GameBaseFirst />
                <GameBaseSecond />

                <div className="projectiles">
                    {Object.entries(this.state.projectiles).map(([id, projectile]) => (
                        <Projectile key={id} projectileId={id} x={projectile.x} y={projectile.y} direction={projectile.direction} speed={projectile.speed} />
                    ))}
                </div>

                <div className="characters" id="ally">
                    {Object.entries(this.state.allyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={id} position={character.position} characterType={character.type} ></Character>
                    ))}
                </div>

                <div className="characters" id="enemy">
                    {Object.entries(this.state.enemyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={id} position={character.position} characterType={character.type} ></Character>
                    ))}
                </div>
            </div>
        );
    }
}

export default GameView;