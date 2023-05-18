import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./HomeMenu.css";
import SocketClient from '../services/SocketClient';

function HomeMenu ({placeholder}){
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    

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
        </div>
    );
}

export default HomeMenu;