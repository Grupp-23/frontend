import React from "react";
import "./ScrollFunction.css"

/**
 * Adds the functionality to scroll
 * @component
 */
class ScrollFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollInterval: null,
        };
    }

    /**
     * Scrolls left when mouse enters left scroll div.
     */
    handleMouseEnterLeft = () => {
        clearInterval(this.state.scrollInterval);
        this.setState({
            scrollInterval: setInterval(() => window.scrollBy(-40, 0), 20),
        });
    };

    /**
     * Scrolls right when mouse enters right scroll div.
     */
    handleMouseEnterRight = () => {
        clearInterval(this.state.scrollInterval);
        this.setState({
            scrollInterval: setInterval(() => window.scrollBy(40, 0), 20),
        });
    };

    /**
     * Stops scrolling when mouse leaves scroll div.
     */
    handleMouseLeave = () => {
        clearInterval(this.state.scrollInterval);
    };

    render() {
        return (
            <div>
                <div 
                    className="scroll-div" 
                    id="left-scroll-div" 
                    onMouseEnter={this.handleMouseEnterLeft} 
                    onMouseLeave={this.handleMouseLeave} 
                />
                <div 
                    className="scroll-div" 
                    id="right-scroll-div" 
                    onMouseEnter={this.handleMouseEnterRight} 
                    onMouseLeave={this.handleMouseLeave} 
                />
            </div>
        );
    }
}

export default ScrollFunction;