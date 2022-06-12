import React, { useContext } from "react";
import { tableContext } from "./MineSearch";
import MineTd from "./MineTd";

const MineTr = React.memo(({rowIndex}) =>{
  const {tableData} = useContext(tableContext);

  return(
    <tr>
      {tableData[0] && Array(tableData[0].length).fill().map((v,i)=>
      <MineTd key={'Td'+i} rowIndex={rowIndex} colIndex={i}/>)}
    </tr>
  )

});

export default MineTr;