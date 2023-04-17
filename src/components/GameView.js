import React, { useEffect } from 'react';
import GameBaseFirst from '../components/GameBaseFirst';
import GameBaseSecond from '../components/GameBaseSecond';
import './GameView.css';

const GameView = () => {
  useEffect(() => {
    const left = document.querySelector('.scroll-left');
    const right = document.querySelector('.scroll-right');

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
      window.scrollBy({ left: -10, behavior: 'smooth' });
    };

    // Function to scroll right
    const scrollRight = () => {
      window.scrollBy({ left: 10, behavior: 'smooth' });
    };

    // Function to add mouseenter and mouseleave event listeners
    const addScrollEventListeners = () => {
      left.addEventListener('mouseenter', scrollLeft);
      left.addEventListener('mouseleave', handleMouseLeave);
      right.addEventListener('mouseenter', scrollRight);
      right.addEventListener('mouseleave', handleMouseLeave);
    };

    // Function to remove mouseenter and mouseleave event listeners
    const removeScrollEventListeners = () => {
      left.removeEventListener('mouseenter', scrollLeft);
      left.removeEventListener('mouseleave', handleMouseLeave);
      right.removeEventListener('mouseenter', scrollRight);
      right.removeEventListener('mouseleave', handleMouseLeave);
    };

    // Function to handle mouseleave event
    const handleMouseLeave = () => {
      removeScrollEventListeners();
    };

    // Add event listeners to scroll on hover
    left.addEventListener('mouseenter', addScrollEventListeners);
    right.addEventListener('mouseenter', addScrollEventListeners);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      removeScrollEventListeners();
    };
  }, []);

  return (
    <div id="gameview">
      <GameBaseFirst />
      <GameBaseSecond></GameBaseSecond>
      <div className="scroll-left"></div>
      <div className="scroll-right"></div>
    </div>
  );
};

export default GameView;
