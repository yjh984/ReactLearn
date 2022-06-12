import React, { useEffect, useRef, useState, useCallback } from 'react';
import './RSP.css';

const rspCodes = {
  rock : '0',
  scissor : '-142px',
  paper : '-284px',
}

const scores ={
  rock : 0,
  scissor : 1,
  paper : -1,
}
// let interval; //useRef로 사용하는 것이

export default function RSP(){

  const [imgCoord, setImgCoord] = useState(rspCodes.rock);
  const [result,setResult] = useState('');
  const [score, setScore] = useState(scores.rock);
  const [buttonDisable, setButtonDisable] = useState(false);
  const interval = useRef();

  const rspChange=useCallback(()=>{
    // const imgC=imgCoord;
    // console.log('setInterval', imgCoord);
    if(imgCoord===rspCodes.rock) setImgCoord(rspCodes.scissor);
    else if(imgCoord===rspCodes.scissor) setImgCoord(rspCodes.paper);
    else if(imgCoord===rspCodes.paper) setImgCoord(rspCodes.rock);
  },[imgCoord]);

  useEffect(()=>{
    interval.current = setInterval(rspChange,50);  // rspChange()로 쓰면 안됨?? ()=>rspChange()는 괜찮음??
    return ()=> clearInterval(interval.current); //willUnmount를 hooks에선 useEffect의 함수 return으로
  },[imgCoord,rspChange]);

  const computerChoice=(imgCoord)=>{
    // console.log((Object.entries(rspCodes).find('0'))[0]);
    // console.log(function(v){return v[1]===imgCoord});
    return Object.entries(rspCodes).find((v)=>v[1]===imgCoord)[0];
  };

  const onClickBtn=(selected)=>(e)=>{
    setButtonDisable(true);
    clearInterval(interval.current);
    // console.log(scores[selected],',',selected);
    const diff = scores[selected]-scores[computerChoice(imgCoord)];
    if(diff===0) setResult('Draw');
    else if([-1,2].includes(diff)){
      setResult('You win!!');
      setScore((pScore)=>pScore+1);
    }
    else {
      setResult('You lose~~');
      setScore((pScore)=>pScore-1);
    }
    setTimeout(()=>{
      setButtonDisable(false);
      interval.current = setInterval(rspChange,50);
    },1000);
  }

  return (
  <>
    <h3> Welcome to Rock Scissor Paper</h3>
    <div id='computer' style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0px`}}/>
    <div>
      <button id='rock' className='btn' disabled={buttonDisable} onClick={onClickBtn('rock')}>바위</button>
      <button id='scissor' className='btn' disabled={buttonDisable} onClick={onClickBtn('scissor')}>가위</button>
      <button id='paper' className='btn' disabled={buttonDisable} onClick={onClickBtn('paper')}>보</button>
    </div>
    <div>{result}</div>
    <div>Score: {score} points</div>  
  </>
  )
}