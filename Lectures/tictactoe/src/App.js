import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import { checkWins } from './utils';
import TableRow from './components/TableRow';

const CELL_CLICK = 'CELL_CLICK';
const SET_WINNER = 'SET_WINNER';
const RESET = 'RESET';

const initialState = {
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
  winner: '',
  currentCell: [-1, -1]
};

const reducer = (state, action) => {
  switch(action.type) {
    case CELL_CLICK:
      const tableData = [...state.tableData];
      tableData[action.rowIndex][action.cellIndex] = action.turn;
      
      return {
        ...state,
        tableData,
        currentCell: [action.rowIndex, action.cellIndex]
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      }
    case RESET:
      return {
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        winner: '',
        currentCell: [-1, -1]
      }
    default:
      return {
        ...state
      };
  };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const count = useRef(0);
  const turn = useRef('O');
  const endCount = useRef(state.tableData.length * state.tableData[0].length);

  const cellOnClick = (e, rowIndex, cellIndex) => {
    if (state.tableData[rowIndex][cellIndex] !== '' || state.winner) {
      return;
    }

    dispatch({type: CELL_CLICK, rowIndex: rowIndex, cellIndex: cellIndex, turn: turn.current});
    count.current += 1;
  };

  const resetOnClick = () => {
    dispatch({type: RESET});
    count.current = 0;
  }

  useEffect(() => {
    if (checkWins(state.tableData, state.currentCell, turn.current)) {
      dispatch({type: SET_WINNER, winner: turn.current});      
    } else if (count.current > 0) {
      turn.current = turn.current === 'O' ? 'X' : 'O';
    }
  }, [state.tableData, state.currentCell]);

  return (
    <>
      <table>
        <tbody>
          {state.tableData.map((value, index) => {
            return <TableRow key={index} rowIndex={index} rowData={value} cellOnClick={cellOnClick}/>
          })}
        </tbody>
      </table>
      { state.winner && <span className="winner-text">{turn.current} 님의 승리!</span>}
      { (state.winner || count.current === endCount.current) && <button type="button" className="reset-button" onClick={resetOnClick}>한번 더!</button>}
    </>
  );
}

export default App;
