import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Headers from './components/Headers.js'
import PlanetInfo from './components/PlanetInfo.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Routes>
          <Route path="/" element={ <Navigate replace to="/earth"/> }/>
          <Route path="/:title" element={ <PlanetInfo /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
