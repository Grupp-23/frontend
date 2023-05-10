import React from "react";
import CharacterMenu from "../components/CharacterMenu";

class IngameMenu extends React.Component {
    render () {
        return (
            <div className="menu" id="ingame-menu">
                <CharacterMenu />
                <h1 id="gold-counter">moneys</h1>
            </div>
        );
    }
}

export default IngameMenu;