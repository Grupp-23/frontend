import React from 'react';
import "./Projectile.css";
import ProjectileImage from "../assets/projectile.png";

/**
 * Renders a projectile.
 * @component
 * @param {string} projectileId - The ID of the projectile.
 * @param {number} x - The x position of the projectile.
 */
class Projectile extends React.Component {
    constructor(props) {
        super(props);

        this.state = { projectileId: this.props.projectileId, x: this.props.x, y: this.props.y, id: this.props.id, direction: this.props.direction, speed: this.props.speed };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                x: prevState.x + prevState.speed* Math.cos(prevState.direction),
                y: prevState.y + prevState.speed* Math.sin(prevState.direction)
            }));
        }, 10);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div className="projectile" id={this.state.projectileId} style={{ left: `${this.state.x}%`, bottom: `${this.state.y}vw` }}>
                <img src={ProjectileImage} alt="Projectile" />
            </div>
        );
    }
}

export default Projectile;