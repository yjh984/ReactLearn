import React from "react";

export default function CreateContent(props){
    return(
      <div>
        <h2>Create</h2>
        <form action="/create_process" method="post" onSubmit={(e)=>{
          e.preventDefault();
          // alert('hi');
          // debugger;
          props.onCreateContent(e.target.title.value, e.target.desc.value);
        }}>
          <p><input type='text' name="title" placeholder="input title"></input> </p>
          <p><textarea name="desc" placeholder="input description"></textarea></p>
          <p><input type='submit'></input></p>
        </form>
      </div>
    )
  }