import React, { setState, useRef } from "react";

import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import SocketClient from "../services/SocketClient";

/**
 * Represents the game world.
 * @component
 */
class GameView extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { allyCharacters: {}, enemyCharacters: {} };
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
            case "update":
                for (let i = 0; i < jsonObject.game.length; i++) {
                    this.setCharacterPosition(jsonObject.game[i].team, jsonObject.game[i].id, jsonObject.game[i].pos);
                    console.log(jsonObject.game[i].team, jsonObject.game[i].id, jsonObject.game[i].pos);
                }
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
            
            default:
                break;
        }
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
                const newAllyCharacters = { ...prevState.allyCharacters };
                delete newAllyCharacters[id];
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
                <div className="characters" id="ally">
                    {Object.entries(this.state.allyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position} characterType={character.type} ></Character>
                    ))}
                </div>

              

                <div className="characters" id="enemy">
                    {Object.entries(this.state.enemyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position} characterType={character.type} ></Character>
                    ))}
                </div>
            </div>
        );
    }
}

export default GameView;