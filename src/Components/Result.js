import React from "react";

function Result({result}){
  return(
    <>
    {/* {console.log('result:',result)} */}
    <h5>{result}</h5>
    </>
  )
}
export default React.memo(Result);