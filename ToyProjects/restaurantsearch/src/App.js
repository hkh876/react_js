import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import RestaurantList from './components/RestaurantList';
import MyNaverMaps from './components/MyNaverMaps';

function App() {
  const navigateHook = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantList navigateHook={navigateHook} />}/>
        <Route path="/maps" element={<MyNaverMaps />}/>
      </Routes>
    </>
  );
}

export default App;
