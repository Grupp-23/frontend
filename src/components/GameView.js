import React, { useEffect, useRef } from 'react';
import GameBaseFirst from '../components/GameBaseFirst';
import GameBaseSecond from '../components/GameBaseSecond';
//import ScrollFuncition from '../components/ScrollFunction';
import './GameView.css';

const GameView = () => {

  return (
    <div id="gameview">
     
      <GameBaseFirst />
      <GameBaseSecond></GameBaseSecond>
        

    </div>
  );
};

export default GameView;
