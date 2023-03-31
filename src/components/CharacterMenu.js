import Character1 from "../assets/character1.png";
import Character2 from "../assets/character2.png";
import Character3 from "../assets/character3.png";

function CharacterMenu (){

    function handleClick(id, price) {
        console.log("Character: " + id + "\nPrice: " + price);
    }

    return (
        <div className="menu" id="character-menu">
            <ul>
                <li>
                    <button onClick={() => handleClick(1, 15)}>
                        <img src={Character1} alt="Character 1" />
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(2, 50)}>
                        <img src={Character2} alt="Character 2" />
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(3, 100)}>
                        <img src={Character3} alt="Character 3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default CharacterMenu;