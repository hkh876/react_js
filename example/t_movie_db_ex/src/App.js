import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Headers from './components/Headers.js'
import MovieList from './components/MovieList.js'
import MovieInfo from './components/MovieInfo.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers/>
        <main>
          <Routes>
              <Route path="/" element={ <MovieList /> }></Route>
              <Route path="/movie/:movieID" element={ <MovieInfo /> }></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
