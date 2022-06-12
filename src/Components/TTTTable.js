import React from "react";
import Tr from './TTTTr';

export default function Table({tableData, dispatch}){
  return (
  <table>
    <tbody>
    {Array(tableData.length).fill().map((v,i)=><Tr dispatch={dispatch} rowIndex={i} key={'t'+i} rowData={tableData[i]}/>)}
    </tbody>
  </table>
  )
}