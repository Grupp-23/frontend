import "./Character.css";
import TestCharacter from "../assets/testCharacter.png";

function Character({ characterId, position }) {
  return (
    <div className="character" id={characterId} style={{ left: `${position}%` }}>
      <img src={TestCharacter} />
    </div>
  );
}

export default Character;