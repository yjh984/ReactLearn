// import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useReducer } from "react";
import './TicTacToe.css';
import Table from "./TTTTable";

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const initialState={
  winner:'',
  turn: 'O',
  tableData:[['','',''],['','',''],['','','']],
  clickedCell: [-1,-1],
};

const reducer=(state, action)=>{
  switch(action.type){
    case SET_WINNER :
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      // tableData[action.row] = [...tableData[action.row]]; //immer라는 라이브러리로 대체 가능
      tableData[action.row][action.cell] = state.turn;
      return{
        ...state,
        tableData,
        clickedCell:[action.row, action.cell],
      };
    }
    case CHANGE_TURN:
      return{
        ...state,
        turn: state.turn==='O'? 'X':'O',
      }
    case RESET_GAME:
      return{
        ...state,
        turn: 'O',
        tableData:[['','',''],['','',''],['','','']],
        clickedCell: [-1,-1],
      }
    default:
      return state;
  }
};

export default function TicTacToe(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const {tableData, turn, winner, clickedCell} = state;

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

  // const onClickTable=useCallback(()=>{
  //   dispatch({type: SET_WINNER, winner: 'O'});
  // },[]);

  useEffect(()=>{
    const [row, cell] = clickedCell;
    if(row<0) return;
    let win=false;
    if(tableData[row][0]===turn && tableData[row][1]===turn && tableData[row][2]===turn) win=true;
    if(tableData[0][cell]===turn && tableData[1][cell]===turn && tableData[2][cell]===turn) win=true;
    if(tableData[0][0]===turn && tableData[1][1]===turn && tableData[2][2]===turn) win=true;
    if(tableData[2][0]===turn && tableData[1][1]===turn && tableData[0][2]===turn) win=true;
    if(win){
      dispatch({type:SET_WINNER, winner: turn});
      dispatch({type: RESET_GAME});
    } else{
      let isFull = true;
      tableData.forEach((row)=>{
        row.forEach((cell)=>{
          if(!cell) isFull = false;
        })
      });
      if(isFull){
        dispatch({type:SET_WINNER, winner: 'Nobody'});
        dispatch({type: RESET_GAME});
      } else{
        dispatch({type:CHANGE_TURN});
      }
    }
  },[clickedCell])
  // },[clickedCell,tableData,turn])

  return(
    <>
      <h3> Welcome to Tic Tac Toe </h3>
      <Table tableData={tableData} dispatch={dispatch}/>
      {winner && <div>{winner} wins~~~</div>}
    </>
  )
}