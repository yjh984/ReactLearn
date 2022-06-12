import React from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import './Community.css';

const lists = [
    {id:1, title:'HTML', desc:'HTML is ...'},
    {id:2, title:'CSS', desc:'CSS is ...'},
    {id:3, title:'React', desc:'React is ...'}
]

export default function Community(){
    return (
        <>
            <h1> Welcome to Community</h1>
            <NavLink to='/'>Home</NavLink><p/>
            <div>Here is for community each others....</div>
            <ul>
                {lists.map((list)=>(
                    <li key={list.id}><NavLink to={'/Community/'+list.id}>{list.title}</NavLink></li>
                ))}
            </ul>

            <Routes>
                <Route path=':id' element={<Desc title='xx'/>} />
            </Routes>
        </>
            )
}

function Desc(props){
    const {id} = useParams();
    console.log(id,'*',props.title);
    return <div>
        {id}) {lists[id-1].desc}
        </div>
}