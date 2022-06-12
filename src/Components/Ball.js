import React from "react";
import './Ball.css';

export default React.memo(function Ball(props){
  let bg;
  // console.log('number is ',typeof(props.number));
  if(props.number <= 10) bg='red';
  else if(props.number<=20) bg='orange';
  else if(props.number<=30) bg='yellow';
  else if(props.number<=40) bg='blue';
  else bg='green';
  // console.log(bg);

  return (
    <div className="ball" style={{backgroundColor:`${bg}`}}>{props.number}</div>
  );
});