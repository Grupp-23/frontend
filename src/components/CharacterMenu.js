import React, { useRef, useState, useEffect } from "react";
import Character1 from "../assets/SwordmanWithBorder.png";
import Character2 from "../assets/ArcherWithBorder.png";
import Character3 from "../assets/RiderWithBorder.png";
import "./CharacterMenu.css";
import SocketClient from "../services/SocketClient";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(type) {
    this.items.push(type);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }

  printQueue() {
    console.log(this.items.toString());
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
  

function CharacterMenu() {
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const queue1 = useRef(null);
  const queue2 = useRef(null);
  const queue3 = useRef(null);
  const queue4 = useRef(null);
  const queue5 = useRef(null);
  const [queueCount, setQueueCount] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [isProgressBarVisible, setProgressBarVisible] = useState(false);
  const [isQueueEmpty, setQueueEmpty] = useState(true);
  const [queue, setQueue] = useState(new Queue());
  




  function handleClick(type) {
   queue.enqueue(type);
    
    console.log("inserted into queue: " + queue[0]);
    console.log("peek: "+ queue.peek());
    var testvalue = queue.dequeue;

    console.log("dequeue: " + testvalue);
    

    let updatedQueueCount = queueCount + 1;
    setQueueCount(updatedQueueCount);

    let queueList = [queue1, queue2, queue3, queue4, queue5];
    if (updatedQueueCount <= queueList.length) {
      queueList[updatedQueueCount - 1].current.style.backgroundColor = "red";
    }

    if (updatedQueueCount === queueList.length) {
      setButtonsDisabled(true);
    }

    if (isQueueEmpty) {
      setProgressBarVisible(true);
      if (progressRef.current) {
        progressRef.current.style.animation = "loading 2s";
      }
    }
  }

  function handleLoadingComplete() {
    let queueList = [queue1, queue2, queue3, queue4, queue5];
    let updatedQueueCount = queueCount;
    for (let i = queueList.length - 1; i >= 0; i--) {
      if (queueList[i].current.style.backgroundColor === "red") {
        queueList[i].current.style.backgroundColor = "";

        //var nextInQueue = queueList.dequeue;
      
        var nextInQueue = queue.dequeue();
    
        
        
        console.log("nextinqueue: " + nextInQueue);
 
        
                // Sends to the Server that we want to spawn a character
                SocketClient.sendMessage(JSON.stringify({"method":"spawn","type":nextInQueue}));
    
                
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
    setButtonsDisabled(false);

    if (updatedQueueCount === 0) {
      if (progressRef.current) {
        progressRef.current.style.animation = "none";
      }
      setProgressBarVisible(false);
      setQueueEmpty(true);
    }
  }

  useEffect(() => {
    setQueueEmpty(queueCount === 0);
  }, [queueCount]);

  return (
    <div className="menu" id="character-menu">
      <div class="spawnFieldInfo">
        <section className="container text-center">
          <div>
            <h1 class="spawnText">Spawning units...</h1>
            <div
              className={`progress-bar ${
                isProgressBarVisible ? "visible" : ""
              }`}
              ref={progressBarRef}
            >
              <div
                className="progress"
                ref={progressRef}
                onAnimationEnd={handleLoadingComplete}
              >
                <div className="progress-shadow"></div>
              </div>
              <div class="queue">
                <div class="queue1" ref={queue1}></div>
                <div class="queue2" ref={queue2}></div>
                <div class="queue3" ref={queue3}></div>
                <div class="queue4" ref={queue4}></div>
                <div class="queue5" ref={queue5}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ul>
        <li>
          <button onClick={() => handleClick(1)} disabled={buttonsDisabled}>
            <img src={Character1} alt="Character 1" />
            <p>15</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(2)} disabled={buttonsDisabled}>
            <img src={Character2} alt="Character 2" />
            <p>25</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(3)} disabled={buttonsDisabled}>
            <img src={Character3} alt="Character 3" />
            <p>75</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CharacterMenu;

