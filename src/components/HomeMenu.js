import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeMenu.css";
import SocketClient from '../services/SocketClient';
import CreditsHome from './CreditsHome';

/**
 * Represents the Menu on the home screen.
 * @param {string} placeholder - The placeholder text for the input field.
 */
function HomeMenu ({placeholder}){
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
         setIsOpen(!isOpen);
    }

    const navigate = useNavigate();
    
    /**
     * Handles the click event of the button.
     */
    function HandleClick(id){
        if(title !== ""){
            console.log(title)
            SocketClient.setupConnection(navigate);
        }
    }

    return (
        <div className='menu' id="home-menu">
            <input 
                type= "text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}

                placeholder={placeholder}
            >
            </input>
            <button onClick ={() => HandleClick(1)}>
                Play
            </button>


            <button onClick={togglePopup}>
                Click to open
            </button>

            {isOpen && <CreditsHome handleClose= {togglePopup}>
                <div>
                    <h2>Test</h2>
                </div>
                    </CreditsHome>
}
        </div>
    );
}

export default HomeMenu;