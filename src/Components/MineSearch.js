// import { clear } from "@testing-library/user-event/dist/clear";
import React,{useReducer, createContext, useMemo, useEffect} from "react";
import MineForm from "./MineForm";
import MineTable from "./MineTable";

export const CODE={
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
}

export const tableContext = createContext({
  tableData: [],
  halted: true,
  dispatch: ()=>{},
});

const initialState ={
  tableData:[],
  gameInfor : {
    row: 0,
    col: 0,
    mine: 0,
  },
  timer: 0,
  result: '',
  halted: true,
  nOpenCell: 0,
};

const plantMine=(row,col,mine)=>{
  // console.log(row,col,mine);
  const data=[];
  for (let i=0; i<row; i++){
    const rowData=[];
    data.push(rowData);
    for (let j=0; j<col; j++) rowData.push(CODE.NORMAL);
  }
  const candidate = Array(row*col).fill().map((v,i)=>i);
  // console.log(candidate);
  const shuffleMine=[];
  for(let i =0; i < mine; i++){
    const chosen = candidate.splice(Math.floor(Math.random()*candidate.length),1)[0];
    shuffleMine.push(chosen);
  }
  for (let i=0; i<shuffleMine.length; i++){
    const ver = Math.floor(shuffleMine[i]/col);
    const hor = shuffleMine[i]%col;
    data[ver][hor] = CODE.MINE;
  }
  // console.log(data);
  return data;
}

export const START_GAME = 'START_GAME';
export const  OPEN_CELL = 'OPEN_CELL';
export const CLICKED_MINE='CLICKED_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const reducer = (state, action) =>{
  switch(action.type){
    case START_GAME:
      return{
        ...state,
        gameInfor : {
          row: action.row,
          col: action.col,
          mine: action.mine,
        },
        tableData: plantMine(action.row, action.col, action.mine),
        halted: false,
        nOpenCell: 0,
        timer: 0,
      }
    case OPEN_CELL:{
      const tableData = [...state.tableData];
      tableData.forEach((v,i)=>tableData[i]=[...v]);
      // tableData[action.row] = [...state.tableData[action.row]];
      // tableData[action.row][action.col] = CODE.OPENED;
      
      const checked=[];
      let nCurOpenCell = 0;
      const checkAround=(row,col)=>{
        if(row<0 || row>tableData.length-1 || col<0 || col>tableData[0].length-1) return;
        // if([CODE.OPENED, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION, CODE.QUESTION_MINE].includes(tableData[row][col])) return;
        if(tableData[row][col]<-1) return;
        if(checked.includes(row+'/'+col)) return;
        else checked.push(row+'/'+col); 
      
        let aroundCell =[tableData[row][col-1],tableData[row][col+1]];
        if(tableData[row-1])
          aroundCell=aroundCell.concat(
            tableData[row-1][col-1],
            tableData[row-1][col],
            tableData[row-1][col+1],
          );
        if(tableData[row+1])
          aroundCell=aroundCell.concat(
            tableData[row+1][col-1],
            tableData[row+1][col],
            tableData[row+1][col+1],
          );
        
          const countMine = aroundCell.filter(v=>[CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
        
        if(countMine===0){
          // if(row>-1){ // don't need???
            const near =[];
            if(row-1>-1) {
              near.push([row-1,col-1]);
              near.push([row-1,col]);
              near.push([row-1,col+1]);
            }
            near.push([row,col-1]);
            near.push([row,col+1]);
            if(row+1<tableData.length){ 
              near.push([row+1,col-1]);
              near.push([row+1,col]);
              near.push([row+1,col+1]);
            }
            // near.filter(v=>!!v).forEach((n)=>{
            near.forEach((n)=>{
              if(tableData[n[0]][n[1]] !== CODE.OPENED) checkAround(n[0],n[1]);
            })
          // }
        }
        // console.log('row:',action.row-1, action.row+1); //row는 -1 또는 10이상 안됨.. col은 가능??
        // console.log('value:',tableData[action.row-1][action.col]);
        // console.log('around:',aroundCell);
        // if(tableData[row][col]!==CODE.OPENED) nCurOpenCell += 1;
        if(tableData[row][col]===CODE.NORMAL) nCurOpenCell += 1;
        tableData[row][col] = countMine;
      }
      checkAround(action.row, action.col);
      let result = '';
      let halted = false;
      // console.log()
      if(state.gameInfor.row*state.gameInfor.col - state.gameInfor.mine === state.nOpenCell+nCurOpenCell){
        result = `You succeed in ${state.timer}sec`;
        halted = true;
      }

      return {
        ...state,
        tableData,
        nOpenCell: state.nOpenCell+nCurOpenCell,
        result,
        halted,
      }
    }
    case CLICKED_MINE:{
      const tableData = [...state.tableData];
      tableData[action.row]=[...state.tableData[action.row]];
      tableData[action.row][action.col] = CODE.CLICKED_MINE;
      return{
        ...state,
        tableData,
        halted: true,
      }
    }
    case FLAG_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row]=[...state.tableData[action.row]];
      // console.log('M->FM',tableData[action.row][action.col]);
      if(tableData[action.row][action.col] === CODE.MINE)
        tableData[action.row][action.col] = CODE.FLAG_MINE;
      else tableData[action.row][action.col] = CODE.FLAG;
      // tableData[action.row][action.col]=CODE.FLAG_MINE;
      // console.log(tableData[action.row][action.col]);
      return{
        ...state,
        tableData,
      }
    }
    case QUESTION_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row]=[...state.tableData[action.row]];
      // console.log('F->Q',tableData[action.row][action.col]);
      if(tableData[action.row][action.col] === CODE.FLAG_MINE)
        tableData[action.row][action.col] = CODE.QUESTION_MINE;
      else tableData[action.row][action.col] = CODE.QUESTION;
      // console.log(tableData[action.row][action.col]);
      return{
        ...state,
        tableData,
      }
    }
    case NORMALIZE_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row]=[...state.tableData[action.row]];
      if(tableData[action.row][action.col] === CODE.QUESTION_MINE)
        tableData[action.row][action.col] = CODE.MINE;
      else tableData[action.row][action.col] = CODE.NORMAL;
      // console.log(tableData[action.row][action.col]);
      return{
        ...state,
        tableData,
      }
    }
    case INCREMENT_TIMER:
      return{
        ...state,
        timer: state.timer+1,
      }
    default:
      return state;
  }
};

const MineSearch = () =>{
  const [state, dispatch] = useReducer(reducer, initialState);
  const {tableData, halted,timer, result} = state;
  const value = useMemo(()=>(
    {tableData, halted, dispatch}),[tableData, halted]); //context사용시 value들을 useMemo로 묶어야 성능저하를 피할 수 있음

  useEffect(()=>{
    let timer;
    if(halted===false) {
      timer = setInterval(()=>{
        dispatch({type:INCREMENT_TIMER})},1000);
    }
    return ()=> clearInterval(timer); 
  },[halted]);
  // console.log(tableData);
  
  return (
    <tableContext.Provider value={value}>
      <h3> Welcome to Mine Search </h3>
      <MineForm/>
      <div>{timer}</div>
      <MineTable/>
      <div>{result}</div>
    </tableContext.Provider>
  )
}

export default MineSearch;