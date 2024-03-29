import React from "react";
import styled, {css} from "styled-components";

const ToastWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 280px;
`;

const Toast = styled.div`
  background: #fefefe;
  border: #ccc 1px solid;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.2);
  padding: 15px;
  margin-top: 15px;

  ${props => props.type === 'success' && css`
    background-color: ForestGreen;
    border: none;
    color: white;
  `}

  ${props => props.type === 'error' && css`
    background-color: Tomato;
    border: none;
    color: white;
  `}
`;

function Toaster({toasts}){
  return(
    <ToastWrapper>
      {toasts.map((toast,i)=>
        (<Toast key={toast+i} className="toast" type={toast.type}>
        {toast.text}</Toast>)
      )}
    </ToastWrapper>
  )
}

export default Toaster;