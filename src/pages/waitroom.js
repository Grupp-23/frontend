import Background from "../assets/background.png";
import "./home.css";

function WaitRoom (){
    return (
        <main>
            <img src={Background} alt="Background" id="home-background" />
        </main>
    );
}

export default WaitRoom;