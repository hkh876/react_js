import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Headers from 'components/Headers.js'
import BlockPreviews from 'components/BlockPreviews/BlockPreviews.js'
import BlockHosting from 'components/BlockHosting/BlockHosting.js'
import BlockGarage from 'components/BlockGarage/BlockGarage.js'
import BlockEducation from 'components/BlockEducation/BlockEducation.js'
import BlockShop from 'components/BlockShop/BlockShop.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers/>
        <Routes>
          <Route path="/" element={ <BlockPreviews/> }></Route>
          <Route path="/example-1" element={ <BlockHosting/> }></Route>
          <Route path="/example-2" element={ <BlockGarage/> }></Route>
          <Route path="/example-3" element={ <BlockEducation/> }></Route>
          <Route path="/example-4" element={ <BlockShop/> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
