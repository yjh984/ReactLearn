import React, {useCallback} from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td=React.memo(({rowIndex, cellIndex, dispatch, cellData})=>{
// const Td=({rowIndex, cellIndex, dispatch, cellData})=>{
    const onClickTd =useCallback(()=>{
    // console.log('cellData',cellData);
    if(cellData) return;
    dispatch({type:CLICK_CELL, row: rowIndex, cell: cellIndex});
  },[cellData, cellIndex, dispatch, rowIndex]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
    // useMemo(
    //   ()=><td onClick={onClickTd}>{cellData}</td>
    //   ,[cellData]
    // )
  )
})

export default Td;