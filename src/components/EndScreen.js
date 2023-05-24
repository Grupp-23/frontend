import React from 'react';
import "./EndScreen.css";
import { Link } from 'react-router-dom';

class EndScreen extends React.Component {
    render() {
        const { victoryText } = this.props;

        return (
            <div id="end-screen">
                <h1 id="end-heading">{victoryText}</h1>
                <Link to="/" id="home-link">
                    <button>Return to Menu</button>
                </Link>
            </div>
        );
    }
}

export default EndScreen;