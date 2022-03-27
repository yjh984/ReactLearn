import React from "react";

export default function ReadContent(props){
    return(
      <article>
        <h2>{props.title}</h2>
        {props.desc}
      </article>
    )
  }