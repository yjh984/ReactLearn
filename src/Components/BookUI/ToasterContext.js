import React, { useState } from "react";
import Toaster from "./Toaster";

const ToasterContext = React.createContext({
  toasts:[],
  setToasts: ()=>{}
});

const ToasterProvider = (props)=>{
  const [toasts, setToasts] = useState([]);

  const addToast=(text)=>{
    setToasts((preToasts)=>[text,...preToasts]);
    setTimeout(()=>setToasts((preToasts)=>
      preToasts.slice(0,preToasts.length-1)),3000);
  }

  return(
    <ToasterContext.Provider value={{toasts, addToast}}>
      {props.children}
      <Toaster toasts={toasts}/>
    </ToasterContext.Provider>
  )
}

export {ToasterContext, ToasterProvider};