import React from "react";

export default function Control(props){
    return (
      <ul>
        <li>
          <a href="/create/" onClick={(e)=>{
            e.preventDefault();
            props.onModeChange('create');
          }}> Create </a>
        </li>
        {console.log(props.index==='')}
        {props.index!==''?
          <li>
            <a href="/update/" onClick={(e)=>{
              e.preventDefault();
              props.onModeChange('update');
            }}> Update </a>
          </li> : ''
        }
        {props.index!==''?
          <li>
            <input type='button' value='delete' onClick={(e)=>{
              e.preventDefault();
              props.onModeChange('delete');
            }}/>
          </li> : ''
        }
      </ul>
      
    )
  }