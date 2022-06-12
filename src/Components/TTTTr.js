import React from "react";
import Td from './TTTTd';

function Tr({rowData, rowIndex, dispatch}){
  // console.log('tr:',rowData);
  return (
    <tr>
      {Array(rowData.length).fill().map((v,i)=>
      <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} key={'d'+i}>{''}</Td>
      )}
    </tr>
  )
}

// export default React.memo(Tr);
export default Tr;