import React from "react";
import CharacterMenu from "../components/CharacterMenu";
import goldpic from "../assets/goldpic.png";
import "./IngameMenu.css"
import SocketClient from "../services/SocketClient";

/**
 * A menu component that displays a character menu and a gold counter.
 */
class IngameMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { gold: 0}
        this.setGold = this.setGold.bind(this);
    }

    componentDidMount() {
        SocketClient.saveSetGold(this.setGold);
    }

    /**
     * Sets the displayed gold in the menu
     * @param {number} amount 
     */
    setGold(amount) {
        this.setState({ gold: amount });
    }

    render () {
        return (
            <div className="menu" id="ingame-menu">
                <img class="coinpic" src = {goldpic}></img>
                <h1 id="gold-counter">{this.state.gold}</h1>
                
                <CharacterMenu />
            </div>
        );
    }
}

export default IngameMenu;