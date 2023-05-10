import GameView from "../components/GameView";
import IngameMenu from "../components/IngameMenu";
import ScrollFunction from "../components/ScrollFunction";

function Game (){
    return (
        <div>
            <GameView placeholder="Name"></GameView>
            <ScrollFunction />
            <IngameMenu />
        </div>
    );
}

export default Game;