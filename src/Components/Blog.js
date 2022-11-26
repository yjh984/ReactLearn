import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Blog.css';

const Blog = () =>{
  const [title, setTitle] = useState(['Coat for man','Coat for woman','Python']);
  const [nLike, setNLike] = useState([0,0,0]);

  const plusLike=(i)=>{
    // console.log('plusNLike');
    const temp = [...nLike];
    temp[i]+=1;
    setNLike(temp);
  }

  return(
    <div>
      <div className="black-nav">
        <h4 style={{color:'red',fontSzie:'16px'}}>React Blog...</h4>
      </div>
      <NavLink to='/'>Home</NavLink><p/>

      <button onClick={()=>{
        const temp = [...title];
        temp[0] === 'Coat for man'? temp[0]='Tee for man':temp[0]='Coat for man';
        setTitle(temp);
      }}>Changing Catalog..</button>

      {/* <button onClick={()=>{
        const temp = [...title];
        temp.sort();
        setTitle(temp);
      }}>Sorting title...</button> */}

      <Item title = {title[0]} nLike={nLike[0]} plusLike={()=>plusLike(0)}/>
      <Item title = {title[1]} nLike={nLike[1]}  plusLike={()=>plusLike(1)}/>
      <Item title = {title[2]} nLike={nLike[2]} plusLike={()=>plusLike(2)}/>

      {/* <div className="list">
        <h4>{title[1]}</h4>
        <p>Posted on Feb. 17</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>Posted on Feb. 17</p>
      </div> */}

      <Modal/>

    </div>
  )
}

const Item = ({title,nLike, plusLike})=>{
  return(
    <div className="list">
      <h4>{title}
       {/* <span onClick={()=>plusLike()}> 👍 </span> */}
       <span onClick={plusLike} style={{cursor: 'pointer'}}
         role='img' aria-label="emoji name">👍
       </span> 
       {nLike}</h4>
      <p>Posted on Feb. 17</p>
    </div>
  )
}


const Modal = ()=>{
  return(
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>detail...</p>
    </div>
  )
}

export default Blog;