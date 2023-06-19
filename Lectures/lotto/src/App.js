import { useEffect, useRef, useState } from 'react';
import { getNumbers } from './utils.js';
import Ball from './components/Ball.js';
import './App.css';

function App() {
  const [winNumbers, setWinNumbers] = useState(getNumbers);
  const [balls, setBalls] = useState([]);
  const [bonus, setBonus] = useState('');
  const nextIndexRef = useRef(0);
  const timeoutRef = useRef();

  const onResetClick = () => {
    setWinNumbers(getNumbers);
    setBalls([]);
    setBonus('');
    nextIndexRef.current = 0;
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (nextIndexRef.current === 6) {
        setBonus(winNumbers[winNumbers.length - 1]);
      } else {
        setBalls((prevBalls) => {
          return [...prevBalls, winNumbers[prevBalls.length]]
        });
        nextIndexRef.current += 1;
      }
    }, 1000);

    return () => clearTimeout(timeoutRef.current);
  }, [winNumbers, balls]);

  return (
    <>
      <span className="block-text">당첨 숫자</span>
      {balls.map((value, index) => {
        return (
          <Ball key={index} number={value} />
        );
      })}
      <span className="block-text">보너스!</span>
      {bonus && (
        <>
          <Ball number={bonus} />
          <button className="reset-button" type="button" onClick={onResetClick}>한번 더!</button>
        </>
      )}
    </>
  );
}

export default App;
