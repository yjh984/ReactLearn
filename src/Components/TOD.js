import React from "react";

// function shouldComponentUpdate(newProps, newState) {
//   console.log('should...');
//   return false;
// }; shouldCU can't be used in Functional Type..


export default React.memo( function TOD(props){
  // let lineNavList=[];
  // // shouldComponentUpdate();

  // for (const i in props.lists){  // don't use for... instead of array.map..
  //   // console.log(i);
 
  //   lineNavList.push(<li key={i}>
  //     <a href={'/contents/'+props.lists[i]} onClick={(e)=>{
  //       // console.log(e);
  //       // debugger;
  //       e.preventDefault();
  //       // e.defaultPrevented();
  //       props.onChange(i);
  //     }}
  //     >{props.lists[i]}</a></li>);
  //   // lineNavHTML += `<li><a href='${l}.html' key=${l}>HTML</a></li>`;
  // }
  // console.log(lineNavList[0]);

  return(
    <nav>
      {console.log('TOD is rendered..')}
      <ul>
        {props.lists.map((list,id)=>(
          // {console.log(list, id)}
          <li key={id}><a href={'/contents/'+list} onClick={(e)=>{
            // console.log(list, id);
            // debugger;
            e.preventDefault();
            // e.defaultPrevented();
            props.onChange({id});
          }}
          >{list}</a></li>
        ))}
      </ul>
    </nav>
  )
  }
, (pProps, nProps)=>{
  // console.log(pProps.lists, nProps.lists);
  // console.log(pProps.lists===nProps.lists);
  return pProps.lists===nProps.lists;
  // return pProps===nProps;
});