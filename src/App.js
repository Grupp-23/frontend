import { React } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Game from './pages/game.js';
import Home from './pages/home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'element={<Home></Home>}>
        </Route>
        <Route path ='/game'element = {<Game></Game>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
