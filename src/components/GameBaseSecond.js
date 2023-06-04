import React from 'react';
import Base from "../assets/Base.png";
import "./GameBase.css";

class GameBaseSecond extends React.Component {
  render() {
    const { baseHealth } = this.props; // Get baseHealth value from props

    return (
      <div id="BaseViewOpponent">
        <div className="baseHealth">{baseHealth}</div> {/* Display base health */}
        <img src={Base} alt="Enemy base" />
      </div>
    );
  }
}

export default GameBaseSecond;
