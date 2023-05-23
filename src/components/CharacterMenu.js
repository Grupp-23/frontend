import React, { useRef, useState } from 'react';
import Character1 from "../assets/SwordmanWithBorder.png";
import Character2 from "../assets/ArcherWithBorder.png";
import Character3 from "../assets/RiderWithBorder.png";
import "./CharacterMenu.css"
import SocketClient from "../services/SocketClient";

function CharacterMenu (){
    const progressRef = useRef(null);
    const progressBarRef = useRef(null);
    const queue1 = useRef(null);
    const queue2 = useRef(null);
    const queue3 = useRef(null);
    const queue4 = useRef(null);
    const queue5 = useRef(null);
    const [queueCount, setQueueCount] = useState(0);

    /**
     * Runs when a button is clicked.
     * @param {number} type - The type of character.
     */
    function handleClick(type) {
        let updatedQueueCount = queueCount + 1;
        setQueueCount(updatedQueueCount);
        
        if (progressRef.current) {
            progressRef.current.style.animation = "none";
            setTimeout(() => {
              progressRef.current.style.animation = "loading 2s";
            }, 2);
        }

        let queueList = [queue1, queue2, queue3, queue4, queue5];
        
        if (updatedQueueCount <= queueList.length) {
            queueList[updatedQueueCount-1].current.style.backgroundColor = 'red';
        }
        
        // Sends to the Server that we want to spawn a character
        SocketClient.sendMessage(JSON.stringify({"method":"spawn","type":type}));
    }

    function handleLoadingComplete() {
        let queueList = [queue1, queue2, queue3, queue4, queue5];
        let updatedQueueCount = queueCount;
        for (let i = queueList.length - 1; i >= 0; i--) {
            if (queueList[i].current.style.backgroundColor === 'red') {
                queueList[i].current.style.backgroundColor = '';
                updatedQueueCount--;
                if (updatedQueueCount > 0) {
                    if (progressRef.current) {
                        progressRef.current.style.animation = "none";
                        setTimeout(() => {
                          progressRef.current.style.animation = "loading 2s";
                        }, 2);
                    }
                }
                break;
            }
        }
        setQueueCount(updatedQueueCount);
    }

    return (
        <div className="menu" id="character-menu">
            <div>
                <section className="container text-center">
                    <h1>Spawning units...</h1>
                    <div className="progress-bar" ref={progressBarRef}>
                        <div className="progress" ref={progressRef} onAnimationEnd={handleLoadingComplete}>
                            <div className="progress-shadow"></div>
                        </div>
                       
                       <div class="queue">
                           <div class='queue1' ref={queue1}></div>
                           <div class='queue2' ref={queue2}></div>
                           <div class='queue3' ref={queue3}></div>
                           <div class='queue4' ref={queue4}></div>
                           <div class='queue5' ref={queue5}></div>
                       </div>
                    </div>
                </section>
            </div>
            <ul>
                <li>
                    <button onClick={() => handleClick(1)}>
                        <img src={Character1} alt="Character 1" />
                        <p>15</p>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(2)}>
                        <img src={Character2} alt="Character 2" />
                        <p>25</p>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(3)}>
                        <img src={Character3} alt="Character 3" />
                        <p>75</p>
                    </button>
                </li>

            </ul>
        </div>
    );
}

export default CharacterMenu;
