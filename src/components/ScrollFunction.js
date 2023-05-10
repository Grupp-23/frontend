import React, { useState } from "react";
import "./ScrollFunction.css"

/**
 * A component that allows scrolling left and right.
 */
function ScrollFunction() {
    const [scrollInterval, setScrollInterval] = useState(null);

    /**
     * Scrolls left when mouse enters left scroll div.
     */
    const handleMouseEnterLeft = () => {
        clearInterval(scrollInterval);
        setScrollInterval(setInterval(() => window.scrollBy(-40, 0), 20));
    };

    /**
     * Scrolls right when mouse enters right scroll div.
     */
    const handleMouseEnterRight = () => {
        clearInterval(scrollInterval);
        setScrollInterval(setInterval(() => window.scrollBy(40, 0), 20));
    };

    /**
     * Stops scrolling when mouse leaves scroll div.
     */
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