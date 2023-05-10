import React from 'react';
import Base from "../assets/Base.png";
import "./GameBase.css";

class GameBase extends React.Component {
    render() {
        return (
            <div id="BaseView">
                <img src={Base} alt="Ally Base" />
            </div>
        );
    }
}

export default GameBase;