import GameView from "../components/GameView";
import CharacterMenu from "../components/CharacterMenu";
import ScrollFunction from "../components/ScrollFunction";

function Game (){
    return (
        <div>
            <GameView placeholder="Name"></GameView>
            <ScrollFunction />
            <CharacterMenu />
        </div>
    );
}

export default Game;