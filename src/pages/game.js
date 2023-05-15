import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import EndScreen from "../components/EndScreen";
import GameView from "../components/GameView";
import IngameMenu from "../components/IngameMenu";
import ScrollFunction from "../components/ScrollFunction";
import SocketClient from "../services/SocketClient";

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
            <ScrollFunction />
            <IngameMenu />
            {showEndScreen && <EndScreen victoryText={endScreenStatus} />}
        </div>
    );
}

export default Game;