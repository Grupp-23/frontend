import React from 'react';
import "./Character.css";
import TestCharacter from "../assets/testCharacter.png";

/**
 * Renders a character.
 * @component
 * @param {string} characterId - The ID of the character.
 * @param {number} position - The position of the character.
 */
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