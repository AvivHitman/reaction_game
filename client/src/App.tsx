import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import GameLobby from './pages/game/GameLobby';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameLobby />} />
      </Routes>
    </Router>
  );
};

export default App;
