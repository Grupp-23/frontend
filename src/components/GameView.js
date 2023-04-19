import React, { setState } from "react";
import "./GameView.css";
import GameBaseFirst from "../components/GameBaseFirst";
import GameBaseSecond from "../components/GameBaseSecond";
import Character from "./Character";
import Socket from "../services/socket";

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allyCharacters: {}, enemyCharacters: {}, intervalIds: [] };
        this.spawnCharacter = this.spawnCharacter.bind(this);
    }

    componentDidMount() {
        Socket.saveSpawnCharacter(this.spawnCharacter);
    }

    /**
     * Adds a character to chosen character list
     * @param {*} characterType 
     * @param {int} team 
     * @param {int} id 
     * @param {int} position 
     */

    spawnCharacter(characterType, team, id, position) {
        if (team === 0) {
            this.setState(prevState => ({
                allyCharacters: {
                    ...prevState.allyCharacters,
                    [id]: { type: characterType, position: position }
                }
            }));
        }
        else if (team === 1) {
            this.setState(prevState => ({
                enemyCharacters: {
                    ...prevState.enemyCharacters,
                    [id]: { type: characterType, position: position }
                }
            }));
        }

        // The following should not be in the finished product
        let newPosition = 0;

        const intervalId = setInterval(() => {
            this.setCharacterPosition(team, id, newPosition);
            newPosition = newPosition + 0.1;

            if (newPosition >= 90) {
                clearInterval(this.state.intervalIds[0]);
                this.removeCharacter(team, id);
            }
        }, 10);

        this.setState(prevState => ({
            ...prevState,
            intervalIds: prevState.intervalIds.concat(intervalId)
        }));
        // What shouldnt be in the finished product ends here
    }

    /**
     * Sets the x position of chosen character
     * @param {int} team 
     * @param {int} id 
     * @param {int} newPosition 
     */
    setCharacterPosition(team, id, newPosition) {
        if (team === 0) {
            this.setState(prevState => ({
                allyCharacters: {
                    ...prevState.allyCharacters,
                    [id]: { ...prevState.allyCharacters[id], position: newPosition }
                }
            }));
        }
        else if (team === 1) {
            this.setState(prevState => ({
                enemyCharacters: {
                    ...prevState.enemyCharacters,
                    [id]: { ...prevState.enemyCharacters[id], position: newPosition }
                }
            }));
        }
    }

    /**
     * Removes the chosen character from the characters list
     * @param {int} team 0 for ally and 1 for enemy
     * @param {int} id 
     */

    removeCharacter(team, id) {
        if (team === 0) {
            this.setState(prevState => {
                const newAllyCharacters = { ...prevState.allyCharacters };
                delete newAllyCharacters[id];
                return { allyCharacters: newAllyCharacters };
            });
        }
        else if (team === 1) {
            this.setState(prevState => {
                const newEnemyCharacters = { ...prevState.enemyCharacters };
                delete newEnemyCharacters[id];
                return { enemyCharacters: newEnemyCharacters };
            });
        }
    }
    const isScrollingRef = useRef(false); // Ref to keep track of scrolling state

    useEffect(() => {
      const left = document.querySelector('.scroll-left');
      const right = document.querySelector('.scroll-right');
      let scrollInterval = null;
      let speed = 10;
  
      // Function to handle scroll event
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
          left.style.opacity = 1;
          right.style.opacity = 1;
        } else {
          left.style.opacity = 0;
          right.style.opacity = 0;
        }
      };
  
      // Add event listener for scroll event
      window.addEventListener('scroll', handleScroll);
  
      // Function to scroll left
      const scrollLeft = () => {
        if (isScrollingRef.current) {
          window.scrollBy({ left: -10, behavior: 'smooth' });
          
          requestAnimationFrame(scrollLeft);
        }
      };
  
      // Function to scroll right
      const scrollRight = () => {
        if (isScrollingRef.current) {
          window.scrollBy({ left: 10, behavior: 'smooth' });
          requestAnimationFrame(scrollRight);
        }
      };
  
      // Function to start scrolling
      const startScrolling = (direction) => {
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          if (direction === 'left') {
            scrollLeft();
          } else {
            scrollRight();
          }
        }
      };
  
      // Function to stop scrolling
      const stopScrolling = () => {
        isScrollingRef.current = false;
      };
  
      // Add event listeners for mouseover and mouseout events
      left.addEventListener('mouseover', () => {
        startScrolling('left');
      });
      left.addEventListener('mouseout', stopScrolling);
      right.addEventListener('mouseover', () => {
        startScrolling('right');
      });
      right.addEventListener('mouseout', stopScrolling);
  
      // Clean up event listeners on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        left.removeEventListener('mouseover', () => {});
        left.removeEventListener('mouseout', stopScrolling);
        right.removeEventListener('mouseover', () => {});
        right.removeEventListener('mouseout', stopScrolling);
      };
    }, []);
    

    render() {
        return (
            <div id="gameview">
                <GameBaseFirst />
                <div className="characters" id="ally">
                    {Object.entries(this.state.allyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position}></Character>
                    ))}
                </div>

                <div className="characters" id="enemy">
                    {Object.entries(this.state.enemyCharacters).map(([id, character]) => (
                        <Character key={id} characterId={character.type} position={character.position}></Character>
                    ))}
                </div>
                <GameBaseSecond></GameBaseSecond>
                
            </div>
        );
    }
}

export default GameView;