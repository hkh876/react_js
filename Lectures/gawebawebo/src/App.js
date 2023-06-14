import { useRef, useState } from 'react';
import { useIntervalHooks } from './Utils';
import './App.css';

const GaweBaweBo = {
  GAWE: -1,
  BAWE: 0,
  BO: 1,
};

function App() {
  const [imageState, setImageState] = useState('gawe-image');
  const [resultMessage, setResultMessage] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  const [score, setScore] = useState(0);
  const currentGaweBaweBo = useRef()

  const changeHand = () => {
    if (imageState === 'gawe-image') {
      setImageState('bawe-image');
      currentGaweBaweBo.current = GaweBaweBo.BAWE;
    } else if (imageState === 'bawe-image') {
      setImageState('bo-image');
      currentGaweBaweBo.current = GaweBaweBo.BO;
    } else if (imageState === 'bo-image') {
      setImageState('gawe-image');
      currentGaweBaweBo.current = GaweBaweBo.GAWE;
    }
  };

  const actionOnClick = (e, action) => {
    /*
      0 = 비김
      -1 or 2 = 패배
      1 or -2 = 승리
    */
    if (isRunning) {
      setIsRunning(false);
      const diff = action - currentGaweBaweBo.current;
      if (diff === 0) {
        setResultMessage('비겼습니다!');
      } else if( diff === -1 || diff === 2) {
        setResultMessage('졌습니다!');
        setScore((prevScore) => {
          return prevScore - 1;
        });
      } else {
        setResultMessage('이겼습니다!');
        setScore((prevScore) => {
          return prevScore + 1;
        });
      }
      setTimeout(() => setIsRunning(true), 2000);
    }
  };

  useIntervalHooks(changeHand, isRunning ? 50 : null);

  return (
    <>
      <div className="image-container">
        <img src="gawebawebo.png" className={imageState} alt="gawebawebo img"></img>
      </div>
      <span className="result-text">{resultMessage}</span>
      <button type="button" className="action-button" onClick={(e) => actionOnClick(e, GaweBaweBo.GAWE)}>가위</button>
      <button type="button" className="action-button" onClick={(e) => actionOnClick(e, GaweBaweBo.BAWE)}>바위</button>
      <button type="button" className="action-button" onClick={(e) => actionOnClick(e, GaweBaweBo.BO)}>보</button>
      <span className="score-text">점수 : {score}</span>
    </>
  );
}

export default App;
