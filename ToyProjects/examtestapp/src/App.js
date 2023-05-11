import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { SetDefaultScreenSize } from './Utils.js';
import Home from './pages/Home.js';
import ExamHome from './pages/ExamHome.js'
import PastQuestion from './pages/PastQuestion.js';
import SavedQuestion from './pages/SavedQuestion.js';
import ExpectationQuestion from './pages/ExpectationQuestion.js'
import SavedListQuestion from './pages/SavedListQuestion';

function App() {
    const navigateHook = useNavigate();

    useEffect(() => {
      SetDefaultScreenSize();
    })

    return (
        <div className='App'>
            <div className="App-container">
              <Routes>
                  <Route path="/" element={<Home navigateHook={navigateHook}></Home>}/>
                  <Route path="/exam" element={<ExamHome navigateHook={navigateHook}></ExamHome>}/>
                  <Route path="/exam/pastQuestion" element={<PastQuestion navigateHook={navigateHook}></PastQuestion>}/>
                  <Route path="/exam/savedQuestion" element={<SavedListQuestion navigateHook={navigateHook}></SavedListQuestion>}/>
                  <Route path="/exam/savedQuestion/:examId" element={<SavedQuestion navigateHook={navigateHook}></SavedQuestion>}></Route>
                  <Route path="/exam/expectationQuestion" element={<ExpectationQuestion navigateHook={navigateHook}></ExpectationQuestion>}/>
              </Routes>
            </div>
        </div>
    );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
