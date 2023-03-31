import HomeMenu from "../components/HomeMenu"
import GameView from "../components/GameView";
import CharacterMenu from "../components/CharacterMenu";

function Home (){
    return (
        <main>
            <HomeMenu placeholder="Name"></HomeMenu>
            <GameView />
            <CharacterMenu />
        </main>
    );
}

export default Home;