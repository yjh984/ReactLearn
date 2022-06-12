import React,{useState, useCallback, useContext, useMemo} from "react";
import { START_GAME, tableContext } from "./MineSearch";

const MineForm= React.memo(()=>{
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(12);
  const [mine, setMine] = useState(20);
  const {dispatch} = useContext(tableContext);

  const onChangeRow=useCallback((e)=>{
    setRow(e.target.value);
  },[]);
  const onChangeCol=useCallback((e)=>{
    setCol(e.target.value);
  },[]);
  const onChangeMine=useCallback((e)=>{
    setMine(e.target.value);
  },[]);
  const onClickBtn=useCallback(()=>{
    dispatch({type:START_GAME, row, col, mine});
  },[row, col, mine]);

  return useMemo(()=>(
    <div>
      <input style={{width:50}} type='number' value={row} onChange={onChangeRow}/>
      <input style={{width:50}} type='number' value={col} onChange={onChangeCol}/>
      <input style={{width:50}} type='number' value={mine} onChange={onChangeMine}/>
      <button onClick={onClickBtn}>Start</button>
      {/* {console.log("Forming...")} */}
    </div>
  ),[row,col,mine]);
});

export default MineForm;