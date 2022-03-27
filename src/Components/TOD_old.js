import React from "react";

// function shouldComponentUpdate(newProps, newState) {
//   console.log('should...');
//   return false;
// }; shouldCU can't be used in Functional Type..

export default TODMemo = Re

export default function TOD(props){
  let lineNavList=[];
  // shouldComponentUpdate();

  // function onClick(e,i){
  //   e.preventDefault(); 
  //   props.onChange(i);
  //   console.log('onClikc...');
  // }
  // function onClick(e){
  //     e.preventDefault(); 
  //     props.onChange(0);
  //     console.log('onClikc...');
  //   }

  for (const i in props.lists){
    // console.log(i);
    // const temp = `<li><a href='/content/${props.lists[i]}' key=${i}`+
    //   " onClick={onClick(e,i)} >" +
    //   `${props.lists[i]}</a></li>`;
    // const temp = '<h1>tt' + '</h1>';
    // lineNavList += temp;
    lineNavList.push(<li key={i}>
      <a href={'/contents/'+props.lists[i]} onClick={(e)=>{
        // console.log(e);
        // debugger;
        e.preventDefault();
        // e.defaultPrevented();
        props.onChange(i);
      }}
      >{props.lists[i]}</a></li>);
    // lineNavHTML += `<li><a href='${l}.html' key=${l}>HTML</a></li>`;
  }
  // console.log(lineNavList[0]);

 
  console.log('TDO performed...');

  return(
    <nav>
      <ul>
        {lineNavList}
        {/* <li><a href='contents/HTML' onClick={(e)=>{
          e.preventDefault(); 
          props.onChange(0); */}
          {/* // console.log('onClikc...'); */}
        {/* }}>HTML</a></li> */}
      {/* <ul dangerouslySetInnerHTML={{__html: lineNavList}}> */}
        {/* {lineNavList} */}
        {/* {temp} */}
      </ul>
    </nav>
  )
  }