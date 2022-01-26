import './App.css';
import CarList from './components/CarList.js';

function App() {
  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="flex">
        <div className="sidebar">Sidebar</div>
        <div className="card-grid">
          <CarList />
        </div>
      </div>
    </div>
  );
}

export default App;
