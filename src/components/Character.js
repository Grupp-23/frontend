import React from 'react';
import "./Character.css";
import CharacterType1 from "../assets/swordsman.png";
import CharacterType2 from "../assets/archer.png";
import CharacterType3 from "../assets/rider.png";

/**
 * Renders a character.
 * @component
 * @param {string} characterId - The ID of the character.
 * @param {number} position - The position of the character.
 * @param {number} characterType - The type of image to display.
 */
class Character extends React.Component {
  render() {
    const { characterId, position, characterType } = this.props;
    let image = CharacterType1;
    if (characterType === 2) {
      image = CharacterType2;
    }
    else if (characterType === 3) {
      image = CharacterType3
    }
    return (
      <div className="character" id={characterId} style={{ left: `${position}%` }}>
        <img src={image} alt="Character" />
      </div>
    );
  }
}

export default Character;