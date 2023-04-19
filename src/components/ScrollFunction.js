import React, { Component } from 'react';
import './GameView.css';

class ScrollFunction extends Component {
  constructor(props) {
    super(props);

    this.isScrollingRef = React.createRef();
    this.left = null;
    this.right = null;
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.left.style.opacity = 1;
      this.right.style.opacity = 1;
    } else {
      this.left.style.opacity = 0;
      this.right.style.opacity = 0;
    }
  }

  scrollLeft = () => {
    if (this.isScrollingRef.current) {
      window.scrollBy({ left: -10, behavior: 'smooth' });
      requestAnimationFrame(this.scrollLeft);
    }
  }

  scrollRight = () => {
    if (this.isScrollingRef.current) {
      window.scrollBy({ left: 10, behavior: 'smooth' });
      requestAnimationFrame(this.scrollRight);
    }
  }

  startScrolling = (direction) => {
    if (!this.isScrollingRef.current) {
      this.isScrollingRef.current = true;
      if (direction === 'left') {
        this.scrollLeft();
      } else {
        this.scrollRight();
      }
    }
  }

  stopScrolling = () => {
    this.isScrollingRef.current = false;
  }

  componentDidMount() {
    this.left = document.querySelector('.scroll-left');
    this.right = document.querySelector('.scroll-right');

    // Add event listener for scroll event
    window.addEventListener('scroll', this.handleScroll);

    // Add event listeners for mouseover and mouseout events
    this.left.addEventListener('mouseover', () => {
      this.startScrolling('left');
    });
    this.left.addEventListener('mouseout', this.stopScrolling);
    this.right.addEventListener('mouseover', () => {
      this.startScrolling('right');
    });
    this.right.addEventListener('mouseout', this.stopScrolling);
  }

  componentWillUnmount() {
    // Clean up event listeners on component unmount
    window.removeEventListener('scroll', this.handleScroll);
    this.left.removeEventListener('mouseover', () => {});
    this.left.removeEventListener('mouseout', this.stopScrolling);
    this.right.removeEventListener('mouseover', () => {});
    this.right.removeEventListener('mouseout', this.stopScrolling);
  }

  render() {
    return (
      <div>
        {this.left && this.right && (
          <>
            <div className='scroll-left'></div>
            <div className='scroll-right'></div>
          </>
        )}
      </div>
    );
  }
}

export default ScrollFunction;
