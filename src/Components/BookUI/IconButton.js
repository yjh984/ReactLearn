import { CircularProgress } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import styled, {css} from "styled-components";

const StyledDiv=styled.div`
  cursor: pointer;
  ${({color})=> color && css`
    div{
      color: ${color}
    }
  `}
  ${({size})=>size && css`
    div{
      font-size:${size}
    }
  `}
`;

function IconButton({loading, color, size, onDelete}){
  // loading = false;
  return(
    <StyledDiv sieze={size} color={color}>
      {loading ? (<CircularProgress />):(
        <div>
          <Delete className="delete" onClick={onDelete}/>
        </div>)
      }
    </StyledDiv>
  )
}

export default IconButton;