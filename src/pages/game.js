import React, { useEffect, useState } from "react";

import EndScreen from "../components/EndScreen";
import GameView from "../components/GameView";
import IngameMenu from "../components/IngameMenu";
import ScrollFunction from "../components/ScrollFunction";
import SocketClient from "../services/SocketClient";

import backgroundMusic from "../assets/91476_Glorious_morning.mp3";


/**
 * Represents the Game Page
 */
function Game(){

    const [showEndScreen, setShowEndScreen] = useState(false);
    const [endScreenStatus, setEndScreenStatus] = useState("");

    useEffect(() => {
        addEndScreen = addEndScreen.bind(this);
        SocketClient.saveSetEndScreen(addEndScreen);
    }, []);

    function addEndScreen(text) {
        setShowEndScreen(true);
        setEndScreenStatus(text);
    }

    return (
        <div>
            <GameView placeholder="Name"></GameView>
            <IngameMenu />
            <audio src={backgroundMusic} controls autoPlay>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            <ScrollFunction />
            {showEndScreen && <EndScreen victoryText={endScreenStatus} />}
        </div>
    );
}

export default Game;