import Character1 from "../assets/character1.png";
import Character2 from "../assets/character2.png";
import Character3 from "../assets/character3.png";
import "./CharacterMenu.css"
import SocketClient from "../services/SocketClient";

function CharacterMenu (){
    function handleClick(type) {
        SocketClient.trySpawnCharacter(type);
    }

    return (
        <div className="menu" id="character-menu">
            <ul>
                <li>
                    <button onClick={() => handleClick(1)}>
                        <img src={Character1} alt="Character 1" />
                        <p>15</p>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(2)}>
                        <img src={Character2} alt="Character 2" />
                        <p>50</p>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(3)}>
                        <img src={Character3} alt="Character 3" />
                        <p>100</p>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default CharacterMenu;