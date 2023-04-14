import React, { setState } from "react";
import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import Socket from "../services/socket";

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { characters: [] };
    }

    componentDidMount() {
        Socket.saveSetCharacters(this.spawnCharacter);
    }

    spawnCharacter(characterType) {
        console.log(characterType);
    }

    render() {
        return (
            <div id="gameview">
                <GameBaseFirst />
                {Object.values(this.state.characters).map((character) => (
                <div key={character.id}>{character.name}</div>
                ))}
                <GameBaseSecond></GameBaseSecond>
            </div>
        );
    }
}

export default GameView;