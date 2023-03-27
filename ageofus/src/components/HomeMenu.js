import { useRef } from 'react';

function HomeMenu ({placeholder}){
    const inputRef = useRef(null);

    const handleClick = () => {
        
    }

    return (
        <div>
            <button onClick={handleClick}>
                Play
            </button>
            <input 
                ref={inputRef}
                type="text"
                id="nameInput"
                placeholder={placeholder}
            >

            </input>
        </div>
    );
}

export default HomeMenu;