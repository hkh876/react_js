import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('waiting');
  const [gameMessage, setGameMessage] = useState('클릭해서 시작하세요.');
  const [speeds, setSpeeds] = useState([]);
  const startTimeOut = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const calculateSpeed = () => {
    return (
      speeds.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }) / speeds.length
    );
  };

  const resultReset = () => {
    setSpeeds([]);
  }

  const renderSpeedAndReset = () => {
    return speeds.length > 0
      ? (<>
          <span className="average-text">평균 속도 : {calculateSpeed()}ms</span>
          <button type="button" onClick={resultReset}>리셋</button>
        </>)
      : null;
  };

  const areaOnClick = () => {
    if (gameState === 'waiting') {
      setGameState('ready');
      setGameMessage('초록색이 되면 클릭하세요.');
      
      startTimeOut.current = setTimeout(() => {
        setGameState('now');
        setGameMessage('지금 클릭!');
        
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (gameState === 'ready') {
      clearTimeout(startTimeOut.current);
      setGameState('waiting');
      setGameMessage('너무 빠릅니다! 다시 클릭해서 시작하세요.');
    } else if (gameState === 'now') {
      endTime.current = new Date();
      
      setGameState('waiting');
      setGameMessage('클릭해서 시작하세요.');
      setSpeeds((prevSpeeds) => {
        return [
          ...prevSpeeds,
          (endTime.current - startTime.current)
        ];
      });
    }
  };

  return (
    <>
      <div className={"click-area " + gameState} onClick={areaOnClick}>
        <span>{gameMessage}</span>
      </div>
      { renderSpeedAndReset() }
    </>
  );
}

export default App;
