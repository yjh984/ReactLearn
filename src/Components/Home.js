import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){
  return (
    <>
      <h1> Welcome to Internet World...</h1>
      <ul>
        <li><NavLink to='/Dictionary'>Dictionary</NavLink></li>
        <li><NavLink to='/Community'>Community</NavLink></li>
        <li><NavLink to='/Games'>Games</NavLink></li>
        <li><NavLink to='/BookStore'>Book Store</NavLink></li>
        <li><NavLink to='/Blog'>Blog</NavLink></li>
        <li><NavLink to='/AttendanceList'>An Attendance List made by useReducer</NavLink></li>
      </ul>
    </>
  )
}