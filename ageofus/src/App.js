import { React } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
<<<<<<< Updated upstream
=======
import Home from './pages/home.js'
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        
=======
        <Route exact path='/'element={<Home></Home>}>
          
        </Route>

>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
