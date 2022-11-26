import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUL = styled.ul`
  list-style: none;
  padding:0;
  li{
    padding:4px;
    margin: 5px;
    background-color: #f0f0f0;
    display: inline-block;
    
    &.active{
      background-color: #bbb;
    }
  }

  
`;

function BookMenu({url}){
  const location = useLocation();
  // const li1 = (location===`${url}/General`? 'active':'none');
  // console.log(location);
  // console.log(li1);

  return(
    <StyledUL>
      <li className={(location.pathname===`${url}/General` && 'active').toString()}>
        <NavLink to={`${url}/General`}>General Inform</NavLink> </li>
      <li className={(location.pathname===`${url}/Authors` && 'active').toString()}>
        <NavLink to={`${url}/Authors`}>Authors Inform</NavLink> </li>
      {/* <li className={(location.pathname && 'active').toString()}> */}
      <li className={(location.pathname===url+"/Photos" && 'active').toString()}>
        <NavLink to={`${url}/Photos`}>Photos Inform</NavLink>
      </li>
    </StyledUL>
      
  )
};

export default BookMenu;