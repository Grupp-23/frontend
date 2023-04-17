import "./GameView.css"
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";


function GameView (){

    

    return (
        
        <div id="gameview">
            <GameBaseFirst/>
            <GameBaseSecond></GameBaseSecond>
            <div className="scroll-left"></div>
            <div className="scroll-right"></div>
            
        </div>
    )

    }

export default GameView;