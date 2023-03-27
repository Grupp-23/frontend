import HomeMenu from "../components/HomeMenu"
import GameView from "../components/GameView";

function Home (){
    return (
        <main>
            <HomeMenu placeholder="Name"></HomeMenu>
            <GameView />
        </main>
    );
}

export default Home;