import React, { setState } from "react";
import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import Socket from "../services/socket";

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allyCharacters: {}, enemyCharacters: {} };
        this.spawnCharacter = this.spawnCharacter.bind(this);
    }

    componentDidMount() {
        Socket.saveSetCharacters(this.spawnCharacter);
    }

    spawnCharacter(characterType, team, id) {
        if (team === 0) {
            this.setState(prevState => ({
                allyCharacters: {
                    ...prevState.allyCharacters,
                    [id]: characterType
                }
            }));
        }
        else if (team === 1) {
            this.setState(prevState => ({
                enemyCharacters: {
                    ...prevState.enemyCharacters,
                    [id]: characterType
                }
            }));
        }
    }

    render() {
        return (
            <div id="gameview">
                <GameBaseFirst />
                <div className="characters" id="ally">
                    {Object.values(this.state.allyCharacters).map((character, index) => (
                        <Character key={index} characterId={character}></Character>
                    ))}
                </div>

                <div className="characters" id="enemy">
                    {Object.values(this.state.enemyCharacters).map((character, index) => (
                        <Character key={index} characterId={character}></Character>
                    ))}
                </div>
                <GameBaseSecond></GameBaseSecond>
            </div>
        );
    }
}

export default GameView;