import React, { useState } from "react";

export default function UpdateContent(props){
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);

  return(
    <div>
      <h2>Update</h2>
      <form action="/update_process" method="post" onSubmit={(e)=>{
        e.preventDefault();
        // alert('hi');
        // debugger;
        props.onUpdateContent(e.target.title.value, e.target.desc.value);
      }}>
        <p><input type='text' name="title" placeholder="input title"
          value={title} onChange={(e)=>{
            setTitle(e.target.value);
          }}
        /> </p>
        <p><textarea name="desc" placeholder="input description"
          value={desc} onChange={(e)=>{
            setDesc(e.target.value);
          }}
        /></p>
        <p><input type='submit'></input></p>
      </form>
    </div>
  )
}