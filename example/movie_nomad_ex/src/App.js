import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/Home.js'
import Detail from 'components/Detail.js'

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/movie/:id" element={ <Detail /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
