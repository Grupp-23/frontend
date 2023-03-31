import {useState } from 'react';
import {Link, useNavigate} from "react-router-dom"

function HomeMenu ({placeholder}){
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    

    function HandleClick(id){
        if(title != ""){
            console.log("Test")
            console.log(title)
            navigate('/game')
        }
        
        
        
    }

    return (
        <div className='homeMenu'>
            <button onClick ={() => HandleClick(1)}>
                Play
            </button>
            <input 
                type= "text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}

                placeholder={placeholder}
            >

            </input>
        </div>
    );
}

export default HomeMenu;