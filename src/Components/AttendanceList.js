import React, { useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import Student from "../AttendanceComp/Student";

const ACTION_CODE = {
  ADD : 'add-student',
  DELETE : 'delete-student',
  MARK : 'mark-student',
}

const reducer = (state, action)=>{
  switch (action.type){
    case ACTION_CODE.ADD :
      return {
        count: state.count+1,
        students: [ ...state.students, {
          id: Date.now(),
          name : action.payload.name,
          isHere : false}]
        }
    case ACTION_CODE.DELETE :
      return{
        count: state.count-1,
        students: state.students.filter((student)=>student.id!==action.payload.id),
      }
    case ACTION_CODE.MARK:
      return{
        count: state.count,
        students: state.students.map((student)=>{
          if(student.id===action.payload.id){
            return {...student, isHere:!student.isHere}
          }
          return student;
        })
      }
    default:
      return state;
  }
};

const initialState={
  count: 0,
  students:[],
};

function AttendanceList(){
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  
  return(
    <div>
      <h1>An Attendance List</h1>
      <div>---with useReducer</div>
      <NavLink to='/'>
        Home
      </NavLink>
      <p><br/></p>
      <p>Total Number : {studentsInfo.count}</p>
      <input type='text' placeholder="input a name" value={name}
        onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>{
        dispatch({type:ACTION_CODE.ADD, payload:{name}})
      }}>Add</button>
      {studentsInfo.students && studentsInfo.students.map(student=>{
        return (<Student key={student.id} id={student.id} 
          name={student.name} dispatch={dispatch}
          isHere={student.isHere} ACTION_CODE={ACTION_CODE}/>)}) }
    </div>
  )
}

export default AttendanceList;