import {useState } from 'react';

function HomeMenu ({placeholder}){
    const [title, setTitle] = useState('');
    

    function HandleClick(id){
        if(title != ""){
            console.log("Test")
            console.log(title)
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