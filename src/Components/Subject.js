import React from "react";
import { NavLink } from "react-router-dom";

export default function Subject(props){
    return (
      <header>
        {/* <h1>WEB</h1> */}
        <h1><a href='/' onClick={(e)=>{
          // console.log(e);
          e.preventDefault();
          props.onChange();
        }}>
        {props.title}</a></h1>

        <NavLink to='/'>Home</NavLink><p/>

        {props.sub}
      </header>
    )
  }