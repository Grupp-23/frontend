import HomeMenu from "../components/HomeMenu";
import Background from "../assets/background.png";
import "./home.css";
import logo from "../assets/ageofus.svg";

function Home (){
    return (
        <main>
            <img src={Background} alt="Background" id="home-background" />
            <svg viewBox="0 0 100 50" id="logo">
                <image href={logo} width="100" height="50" />
            </svg>
            <HomeMenu placeholder="Name"></HomeMenu>
        </main>
    );
}

export default Home;