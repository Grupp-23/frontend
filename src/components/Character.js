import React from 'react';
import "./Character.css";
import TestCharacter from "../assets/testCharacter.png";

class Character extends React.Component {
  render() {
    const { characterId, position } = this.props;
    return (
      <div className="character" id={characterId} style={{ left: `${position}%` }}>
        <img src={TestCharacter} alt="Character" />
      </div>
    );
  }
}

export default Character;