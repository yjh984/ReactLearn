import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  border-bottom: #f0f0f0 1px solid;
  padding-bottom: 20px
`;

const StyledLabel = styled.label`
  font-weight: bold;
  width: auto;
`;

function Field(props){
  // console.log("Field props.children: ", props.children);
  return(
    <StyledDiv>
      <StyledLabel htmlFor={props.id}>{props.labelText+" :"}</StyledLabel>
      <div>{props.children}</div>
    </StyledDiv>
  )
}

export default Field;