import HomeMenu from "../components/HomeMenu"
import GameView from "../components/GameView";
import CharacterMenu from "../components/CharacterMenu";



function Game (){
    console.log("Game rendered");
    return (
        <div>
            <GameView placeholder="Name"></GameView>
            
            <CharacterMenu />
        </div>
    );
}

export default Game;