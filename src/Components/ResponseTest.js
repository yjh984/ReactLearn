import React, { useRef, useState } from "react";
import './ResponseTest.css';

// let timeout;
// let startTime;  통상 rendering될 때 변수 초기화를 방지하려면 useRef를 사용함.

export default function ResponseTest(){
  const [mode, setMode] = useState('waiting');
  const [message,setMessage] = useState('click for starting~~');
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();

  const onClickScreen=()=>{
    console.log('clicked');
    if(mode==='waiting'){
      setMode('ready');
      setMessage('Click at green ASAP!!');
      timeout.current=setTimeout(()=>{
        setMode('start');
        setMessage('Click now~~~~');
        startTime.current=new Date();
      },Math.floor(Math.random()*1000)+2000);
    } else if(mode==='ready'){
      clearTimeout(timeout.current);
      setMode('waiting');
      setMessage('Click too early...');
    } else if (mode==='start'){
      const endTime = new Date();
      setMode('waiting');
      setMessage('click for starting~~');
      // setResult([...result, endTime-startTime]);
      setResult((prev)=>[...prev,endTime-startTime.current]);
    }
  }

  const onReset=()=>{
    setResult([]);
  }
  const responseAveraging = ()=>{
    return result.length===0?
      'N/A ms'
      : <>
        {Math.floor(result.reduce((a,c)=>a+c)/result.length)} ms
        <div>
          <button onClick={onReset}>Reset!</button>
        </div>
        </>
  }

  return (
    <>
    <h3> Welcome to Response Test</h3>
    <div id='screen' className={mode} onClick={onClickScreen}>
      {message}
    </div>
    <div>Average Response Time : {responseAveraging()}</div>
    <div>{result.map(v=>v+', ')}</div>
    </>
  )
}
