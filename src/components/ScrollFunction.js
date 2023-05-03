import React, { useState } from "react";
import "./ScrollFunction.css"

function ScrollFunction() {
    const [scrollInterval, setScrollInterval] = useState(null);

    const handleMouseEnterLeft = () => {
        clearInterval(scrollInterval);
        setScrollInterval(setInterval(() => window.scrollBy(-40, 0), 20));
    };

    const handleMouseEnterRight = () => {
        clearInterval(scrollInterval);
        setScrollInterval(setInterval(() => window.scrollBy(40, 0), 20));
    };

    const handleMouseLeave = () => {
        clearInterval(scrollInterval);
    };
   
    return (
        <div>
            <div 
                className="scroll-div" 
                id="left-scroll-div" 
                onMouseEnter={handleMouseEnterLeft} 
                onMouseLeave={handleMouseLeave} 
            />
            <div 
                className="scroll-div" 
                id="right-scroll-div" 
                onMouseEnter={handleMouseEnterRight} 
                onMouseLeave={handleMouseLeave} 
            />
        </div>
    );
}

export default ScrollFunction;