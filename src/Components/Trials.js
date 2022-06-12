import React from "react";

function Trials({trials}){
  return(
    <>
    {console.log('trial:',trials)}
    {trials.map((tr,i)=>(<li key={i}>{tr}</li>))}
    </>
  )
}
export default React.memo(Trials);