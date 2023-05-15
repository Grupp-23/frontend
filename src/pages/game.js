import GameView from "../components/GameView";
import IngameMenu from "../components/IngameMenu";
import ScrollFunction from "../components/ScrollFunction";
import backgroundMusic from "../assets/91476_Glorious_morning.mp3";

/**
 * Represents the Game Page
 */
function Game (){
    return (
        <div>
            <GameView placeholder="Name"></GameView>
            <audio src={backgroundMusic} controls autoPlay>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            <ScrollFunction />
            <IngameMenu />
        </div>
    );
}

export default Game;