import React from "react";
import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import SocketClient from "../services/SocketClient";

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allyCharacters: {}, enemyCharacters: {}, intervalIds: [] };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        SocketClient.saveUpdate(this.update);
    }

    update(jsonObject) {
        const action = jsonObject.method;

        switch (action) {
            case "update":
                for (let i = 0; i < jsonObject.game.length; i++) {
                    this.setCharacterPosition(jsonObject.game[i].team, jsonObject.game[i].id, jsonObject.game[i].pos);
                }
                break;

            case "characterdmg":
                break;

            case "characterdead":
                this.removeCharacter(jsonObject.team, jsonObject.id);
                break;

            case "spawn":
                this.spawnCharacter(jsonObject.type, jsonObject.team, jsonObject.id, 0);
                break;

            case "basedmg":
                break;
        }
    }

    /**
     * Adds a character to chosen character list
     * @param {*} characterType 
     * @param {int} team 
     * @param {int} id 
     * @param {int} position 
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

        /* The following should not be in the finished product
        let newPosition = 0;

        const intervalId = setInterval(() => {
            this.setCharacterPosition(team, id, newPosition);
            newPosition = newPosition + 0.1;

            if (newPosition >= 90) {
                clearInterval(this.state.intervalIds[0]);
                this.removeCharacter(team, id);
            }
        }, 10);

        this.setState(prevState => ({
            ...prevState,
            intervalIds: prevState.intervalIds.concat(intervalId)
        }));
        */
    }

    /**
     * Sets the x position of chosen character
     * @param {int} team 
     * @param {int} id 
     * @param {int} newPosition 
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
     * Removes the chosen character from the characters list
     * @param {int} team 0 for ally and 1 for enemy
     * @param {int} id 
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
                <div className="characters" id="ally">
                    {Object.entries(this.state.allyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position}></Character>
                    ))}
                </div>

                <div className="characters" id="enemy">
                    {Object.entries(this.state.enemyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position}></Character>
                    ))}
                </div>
                <GameBaseSecond></GameBaseSecond>
            </div>
        );
    }
}

export default GameView;