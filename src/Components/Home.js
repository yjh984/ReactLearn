import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){
  return (
    <>
      <h1> Welcome to Internet World...</h1>
      <ul>
        <li><NavLink to='/Dictionary'>Dictionary</NavLink></li>
        <li><NavLink to='/Community'>Community</NavLink></li>
        
      </ul>
    </>
  )
}