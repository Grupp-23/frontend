import React, { useEffect, useRef } from 'react';
import './GameView.css';

function ScrollFunction(){
    const isScrollingRef = useRef(false); // Ref to keep track of scrolling state
    const left = document.querySelector('.scroll-left');
    const right = document.querySelector('.scroll-right');
    useEffect(() => {
        
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
    return (
        <div>
          {left && right && (
            <>
              <div className='scroll-left'></div>
              <div className='scroll-right'></div>
            </>
          )}
        </div>
      );
      
        
} 
export default ScrollFunction;