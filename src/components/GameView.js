import "./GameView.css"
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";

function GameView (){
    return (
        <div id="gameview">
            <GameBaseFirst/>
            
            <GameBaseSecond></GameBaseSecond>
        </div>
    );
}

export default GameView;