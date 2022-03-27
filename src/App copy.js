import './App.css';
import Subject from './Components/Subject';
import TOD from './Components/TOD';
import ReadContent from './Components/ReadContent';
import React, { useState } from 'react';
import Control from './Components/Control';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import { Routes, Route } from 'react-router-dom';

let subDesc=['HTML is for information...',
        'CSS is for design...', 'JS is for programming...'];

export default function App() {
  
  // let subDesc=['HTML is for information...',
  //       'CSS is for design...', 'JS is for programming...'];
  const [lineContents, setLineContents]=useState(['HTML', 'CSS', 'JS']);
  const [contTitle,setContTitle]=useState('Select...');
  const [contDesc, setContDesc]= useState('Please, Contents~~');
  const [mode, setMode]=useState('read');
  const [index, setIndex] = useState('');
  // const count = useMemo(lineContents);
  console.log(typeof(index));

  const deleteContents = ()=>{
    setLineContents(onDeleteContents(index, lineContents));
    console.log('del2');
    setContTitle('Welcome~');
    setContDesc('React~~~');
    setIndex('');
    setMode('read');
  }

  return (
    <div className="App">
      <Subject title='WEB' sub='World Wide Web~'
        onChange={()=>{
          setContTitle('Welcome~'); 
          setContDesc('React~~~');
          setMode('read');
          setIndex('');
        }}
      />
      <TOD lists = {lineContents} onChange={(id)=>{
        const i = String(id.id);
        setContTitle(lineContents[i]);
        setContDesc(subDesc[i]);
        setIndex(i);
        setMode('read');
      }} />
      <Control index={index} onModeChange={(_mode)=>{
        setMode(_mode);
        // console.log(mode);
        // console.log(_mode);
      }}/>
      {mode==='read'? <ReadContent title={contTitle} desc={contDesc} /> : ''}
      {mode==='create'? <CreateContent onCreateContent={(_title,_desc)=>{
        console.log(_title,_desc);
        const newContents = lineContents.concat(_title);
        setLineContents(newContents);
        subDesc.push(_desc);
        // console.log(subDesc);

        const i = newContents.length-1;
        setContTitle(newContents[i]);
        setContDesc(subDesc[i]);
        setIndex(i);
        setMode('read');
      }}/> : ''}
      {mode==='update'? <UpdateContent 
        title={contTitle} desc={contDesc}
        onUpdateContent={(_title,_desc)=>{
          console.log(_title,_desc);
          const i = Number(index);

          // method #1
          // const newContents=lineContents.map((title,idx)=>(
          // // console.log(lineContents.map((title,idx)=>(
          //   idx===i? _title : title
          // ));

          // method #2
          let newContents=Array.from(lineContents);
          newContents[i] = _title;

          // const newContents = lineContents.concat(_title);
          setLineContents(newContents);

          // method #1
          // subDesc=subDesc.map((desc,idx)=>(
          //   idx===i? _desc : desc
          // ));

          // method #2
          subDesc[i] = _desc;

          // console.log(subDesc);
          // subDesc.push(_desc);

          setContTitle(newContents[i]);
          setContDesc(subDesc[i]);
          // setIndex(i);
          setMode('read');

      }}/> : ''}

      {mode==='delete'? deleteContents():''}

      {/* {mode==='delete'? <>
        {setLineContents(onDeleteContents(index, lineContents))}
        {console.log('del2')} 
        {setContTitle('Welcome~')}
        {setContDesc('React~~~')}
        {setIndex('')}
        {setMode('read')}
        </>
        : ''} */}

    </div>
  )
}

function onDeleteContents(index, lineContents){
  const deleteContents = Array.from(lineContents);
  deleteContents.splice(index,1);
  // console.log(deleteContents);
  return deleteContents;
  // return deleteContents.splice(index,1);
}