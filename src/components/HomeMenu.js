import { useRef, useState } from 'react';

function HomeMenu ({placeholder}){
    const inputRef = useRef(null);
    const [title, setTitle] = useState('');
    

    function HandleClick(id){
        if(title != ""){
            console.log("Test")
            console.log(title)
        }
        
        
        
    }

    return (
        <div>
            <button onClick ={() => HandleClick(1)}>
                Click me
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