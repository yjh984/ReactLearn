import React, { useContext } from "react";
import { tableContext } from "./MineSearch";
import MineTr from "./MineTr";

const MineTable = React.memo(() =>{
  const {tableData} = useContext(tableContext);
  // console.log('tableData',tableData);
  // console.log('tableData.length', tableData.length);
  return(
    <table width="500" height="2">
      <tbody>
        {Array(tableData.length).fill().map((v,i)=>
          <MineTr key={'Tr'+i} rowIndex={i}/>)}
      </tbody>
    </table>
  )
});

export default MineTable;