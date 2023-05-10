import React from 'react';
import Base from "../assets/Base.png";
import "./GameBase.css";

class GameBaseSecond extends React.Component {
    render() {
        return (
            <div id="BaseViewOpponent">
                <img src={Base} alt="Enemy base" />
            </div>
        );
    }
}

export default GameBaseSecond;