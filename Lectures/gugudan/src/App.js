import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const inputElement = useRef();

  const resetGame = () => {
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setInputValue('');

    inputElement.current.focus();
  }

  const numberOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const resultOnClick = () => {
    if (first * second === parseInt(inputValue)) {
      setResult(inputValue + ' 정답');
    } else {
      setResult('땡');
    }

    resetGame();
  }

  return (
    <>
      <span>{first} X {second} 는?</span>
      <form>
        <input type="number" value={inputValue} ref={inputElement} onChange={numberOnChange}/>
        <button type="button" onClick={resultOnClick}>입력</button>
      </form>
      <span>{result}</span>
    </>
  );
}

export default App;
