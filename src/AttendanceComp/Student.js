import React from "react";

const Student = ({id, name, dispatch, isHere, ACTION_CODE})=>{
  return(
    <div>
      <span onClick={()=>{
        dispatch({type:ACTION_CODE.MARK, payload:{id}})
      }} style={{
        textDecoration: isHere? 'line-through':'none',
        color: isHere? 'gray':'black',
        cursor: 'pointer',
        }}>{name}</span>
      <button onClick={()=>{
        dispatch({type:ACTION_CODE.DELETE, payload:{id}});
      }}>delete</button>
    </div>
  )
}

export default Student;