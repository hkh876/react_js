import { useRef, useState } from 'react';
import { getNumbers } from './Utils.js';
import TryHistory from './components/TryHistory.js';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [inputValue, setInputValue] = useState('');
  const tries = useRef([]);
  const answer = useRef(getNumbers());
  const refElement = useRef();
  
  const resetGame = () => {
    setResult('');
    setInputValue('');
    tries.current = [];
    answer.current = getNumbers();
  }

  const displayAnswer = (source, target) => {
    let strike = 0;
    let ball = 0;

    target.forEach((element, index) => {
      if (element === parseInt(source[index])) {
        strike = strike + 1;
      } else if (source.includes(element)) {
        ball = ball + 1;
      }
    });

    if (strike === 4) {
      alert('홈런! 새 게임을 시작합니다.');
      resetGame();
    } else {
      const result = strike + ' 스트라이크, ' + ball + ' 볼';
      tries.current = [
        ...tries.current,
        {
          tryInput: source,
          tryResult: result
        }
      ];
      
      setResult(result);
      setInputValue('');
      refElement.current.focus();
    }
  }

  const inputOnSubmit = (e) => {
    e.preventDefault();
    displayAnswer(inputValue, answer.current);
  }

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <span>{result}</span>
      <form onSubmit={inputOnSubmit}>
        <input type="text" pattern="\d*" maxLength={4} value={inputValue} onChange={inputOnChange} ref={refElement}/>
      </form>
      <span>시도 : {tries.current.length}</span>
      { tries.current.map((value, index) => {
        return (
          <TryHistory key={index} try={value}/>
        )
      }) }
    </>
  );
}

export default App;
