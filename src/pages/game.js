import HomeMenu from "../components/HomeMenu"
import GameView from "../components/GameView";
import CharacterMenu from "../components/CharacterMenu";


function Game (){
    return (
        <main>
        
            <GameView placeholder="Name"></GameView>
            
            <CharacterMenu />
        </main>
    );
}

export default Game;