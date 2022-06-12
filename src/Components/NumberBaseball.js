import React, {memo, useCallback, useEffect, useState } from "react";
import Result from "./Result";
import Title from "./Title";
// import Trials from "./Trials";
import Trial from "./Trial";

function getNumbers(){
  const temp = [1,2,3,4];
  const getN=[];
  const createAns = temp.map((v,i)=>{
    while(true){
      const tempN = Math.floor(Math.random()*10,1);
      if(!getN.includes(tempN)) {
        getN.push(tempN);
        return tempN;
      }
    }
  });
  console.log('create : ',createAns);
  return createAns;
}

export default memo(function NumberBaseball(){
  const [result, setResult] = useState("Let's start~~");
  // const [value, setValue] = useState('');
  let value=[];
  const [trial, setTrial] = useState([]);
  const [answer,setAnswer] = useState([]);
//   let answer=[];
  
  useEffect(()=>{ //useEffect를 사용하지 않으면 input때마다 getNumbers()가 실행됨...?
    setAnswer(getNumbers());
    // console.log('effect:',answer);
  },[]);
//   const answer = getNumbers();

  const onSubmitFormCallback = useCallback((e)=>{
    e.preventDefault();
    // console.log(parseInt(Array.from(e.target.value.value)));
    // console.log(e);
    // test();
    const tempValue = (Array.from(e.target.value.value)).map(v=>parseInt(v));
    // console.log(tempValue);
    value = tempValue;
    // console.log('input:',value,',',answer.join(''));
    // console.log('trial:',trial);
    // getNumbers();
    // const tempTrial = `${value}, x S, x B`;
    // setTrial([...trial,tempTrial]);
    // console.log('result:',value.join('')===answer.join(''));
    if(value.join('')===answer.join('')){
      setResult('Homerun~~');
    //   setTrial([...trial,value]);
      alert('Cong. Homerun~~ Try again?');
      setResult("Let's start~~");
      value = [];
      setTrial([]);
    //   answer = getNumbers();
      setAnswer(getNumbers());
    }else{
    //   console.log('trials',trial.length);
      if(trial.length>=9){
        setResult('fail to find the answer~~');
        // setTrial([...trial,value]);
        alert('more than 10 wrong answers.. Try again?');
        setResult("Let's start~~");
        value = [];
        setTrial([]);
        // answer = getNumbers();
        setAnswer(getNumbers());
      }else{
        // setValue('');
        // const valueArray = value.split('').map(v=>parseInt(v));
        // console.log('count:',valueArray,answer);
        let strike=0;
        let ball=0;
        for(let i=0; i<4; i++){
          if(value[i]===answer[i]){
            // console.log('ind:',i);
            strike+=1;
            // continue;
          } else{
            if(answer.includes(value[i])) ball+=1;
          }
        }
        setResult(`Wrong Answer : ${strike} Strikes, ${ball} balls.`);
        const tempTrial = `${value.join('')}, ${strike} S, ${ball} B`;
        setTrial((prev)=>([...prev,tempTrial]));
      }
    }
    e.target.value.value='';
  },[trial,answer, value]);

  // const onChangeInput=(e)=>{
  //   // console.log(e.target);
  //   // e.preventDefault();
  //   setValue(e.target.value);
  //   // setValue(1111);
  // }

  const onChangeInputCallback = useCallback((e)=>{
    // console.log(e.target);
    // e.preventDefault();
    // setValue(e.target.value);
    // setValue(1111);
  },[value])

  return (
    <>
      {/* <h3> Welcome to Number Baseball~~</h3> */}
      <Title title={'Welcome to Number Baseball~~'}/>
      {/* <h5>{result}</h5> */}
      <Result result={result}/>
      <form onSubmit={onSubmitFormCallback}>
        <input autoFocus autoComplete="off" maxLength={4} type='text' name='value' onChange={onChangeInputCallback} />
      </form>
      <div>Trial no. : {trial.length}</div>
      <ul>
        {/* <Trials trials={trial}/> */}
        {trial.map((tr,i)=>(<Trial key={i} trial={tr}/>))}
        {/* {trial.map((tr,i)=>(<li key={i}>{tr}</li>))} */}
      </ul>
    </>
  )
});
