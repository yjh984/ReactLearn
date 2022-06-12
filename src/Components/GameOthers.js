import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

const GameOthers =(props)=>{
  const params = useParams();
  console.log('others',params)
  return(
    <>
    <div>&nbsp; </div>
    <div>Welcome Others</div>
    <div>&nbsp; </div>
    <Routes>
      <Route path="other1" element={<div>Other1</div>}/>
      <Route path="other2" element={<div>Other2</div>}/>
      <Route path="other3" element={<div>Other3</div>}/>
      <Route path="*" element={<div>no page 404</div>}/>
    </Routes>
    </>
  )
}

export default GameOthers;