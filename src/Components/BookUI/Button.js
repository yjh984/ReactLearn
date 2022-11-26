import React from "react";
import styled, {css} from "styled-components";
// import { ToasterContext } from "./ToasterContext";

const ButtonStyled = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: white;
  background-color: black;
  cursor: pointer;

  ${props=>{
    return props.outLine && css`
      border: 2px solid gray;
      background-color: white;
      border-radius: 6px;
      color: black;
      font-size: 20px;
    `
  }}
`

function Button({saving, ...rest}){
  // console.log("Button props", rest);
  return(
      <ButtonStyled {...rest} disabled={saving}>
          {saving? "Processing...":rest.children}
          {/* {saving? "Saving":"Save"} */}
      </ButtonStyled>
  )
}

export default Button;