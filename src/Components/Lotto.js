import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from './Ball';

const getWinNumbers=()=>{
  console.log('getWinNumber was ran..');
  const candidate = Array(45).fill().map((v,i)=>i+1);
  const shuffle=[];
  
  while(candidate.length>0) shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);
  
  const bonusNum = shuffle[shuffle.length-1];
  const winNums = shuffle.slice(0,6).sort((a,b)=>a-b);
  return [...winNums, bonusNum];
  // console.log(shuffle);
}

export default function Lotto(){
  // const [winNums, setWinNums] = useState(getWinNumbers); //함수 반복 실행 막기..
  // = useState(getWinNumbers());로 사용하면 함수가 반복 실행됨..
  // 함수 반복 방지 다른 방법.. useMemo사용
  const numbers = useMemo(()=>getWinNumbers(),[]);
  const [winNums, setWinNums] = useState(numbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonusBall, setBonusBall] = useState(null);
  const [redo, setRedo] = useState(false);
  const intervals = useRef([]);

  // console.log(winNums);

  useEffect(()=>{
    // setWinNums(getWinNumbers());
    winNums.map((v,i)=>{
      if(i<winNums.length-1) intervals.current[i]=setTimeout(()=>setWinBalls((pBalls)=>[...pBalls,v]),(i+1)*1000);
      else intervals.current[i]=setTimeout(()=>{setBonusBall([v]); setRedo(true);},(i+1)*1000);
      return ()=>intervals.current.forEach((v)=>clearInterval(v));
    });
    // console.log('intervals:',intervals);
    return ()=>{}
    // for(let i=0; i<winNums.length; i++){
    //   if(i===winNums.length) setBonusBall(winNums[i]);
    //   else setTimeout(()=>{setWinBalls((pBalls)=>[...pBalls,winNums[i]])},(i+1)*1000);
    // }
  },[winNums])

  const onClickRedo = useCallback(()=>{
    setWinNums(getWinNumbers);
    setWinBalls([]);
    setBonusBall(null);
    setRedo(false);
    intervals.current=[];
  },[]); 
  // useCallback은 함수를 기억하게.. 
  //child component에 함수를 전달할 때는 반드시
  // useCallback으로 감싸줘야 re-rendering을 방지할 수 있음
  // [] 내부 변수나 조건을 넣어 주면.. 변경시 함수도 재 호출됨...ㅎ

  return(
  <>
    <h3> Welcome to Lotto Number</h3>
    <div>Winning Numbers are ...</div>
    <div id='resultWindow'>{winBalls.map((v)=><Ball key={v} number={v}/>)}</div>
    <div>Bonus Number is ...</div>
    {bonusBall && <Ball number={bonusBall}/>}
    {/* <button onClick={redo? onClickRedo : null}>Again?</button> */}
    {redo && <button onClick={onClickRedo}>Again?</button>}
  </>
  )
}