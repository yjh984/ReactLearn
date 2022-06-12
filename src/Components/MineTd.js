import React, { useCallback, useContext, useMemo } from "react";
import { CLICKED_MINE, CODE, FLAG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL, tableContext } from "./MineSearch";

const getTdStyle=(code)=>{
  // console.log("Tding...");
  switch(code){
    case CODE.NORMAL:
    case CODE.MINE:
      return {background: '#444'};
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {background: 'white'};
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {background: 'yellow'};
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {background: 'red'};
    default:
      return {background: 'white'};
  }
}

const getTdText=(code)=>{
  switch(code){
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return '';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';
    default:
      return code||'';
  }
}

const MineTd = React.memo(({rowIndex, colIndex}) =>{
  const {tableData, halted, dispatch} = useContext(tableContext);

  const onClickTd=useCallback(()=>{
    // console.log(halted);
    // const xx=true;
    // if(xx) return;
    if (halted) {
      // console.log("halted",halted);
      return;
    }
    switch(tableData[rowIndex][colIndex]){
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return ;
      case CODE.NORMAL:
        dispatch({type:OPEN_CELL, row:rowIndex, col:colIndex});
        return ;
      case CODE.MINE:
        dispatch({type:CLICKED_MINE, row:rowIndex, col:colIndex});
        return;
      default:
        return;
    }
  },[tableData[rowIndex][colIndex], halted])

  const onRightClickTd=useCallback((e)=>{
    e.preventDefault();
    // console.log("right click",halted);
    if(halted) return;
    switch(tableData[rowIndex][colIndex]){
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({type:FLAG_CELL, row:rowIndex, col:colIndex});
        return;
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        dispatch({type:QUESTION_CELL, row:rowIndex, col:colIndex});
        return;
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        dispatch({type:NORMALIZE_CELL, row:rowIndex, col:colIndex});
        return;
      default:
        return;
    }
  },[tableData[rowIndex][colIndex],halted]);

//   return (
//     <td style={getTdStyle(tableData[rowIndex][colIndex])}
//       onClick={onClickTd}
//       onContextMenu={onRightClickTd}>
//       {getTdText(tableData[rowIndex][colIndex])}
//     </td>
//   )
// });

  return useMemo(()=>(
    <td style={getTdStyle(tableData[rowIndex][colIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
      >
      {getTdText(tableData[rowIndex][colIndex])}
    </td>
  ),[tableData[rowIndex][colIndex],halted]);
});

export default MineTd;