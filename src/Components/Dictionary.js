import Subject from './Subject';
import TOD from './TOD';
import ReadContent from './ReadContent';
import React, { useState } from 'react';
import Control from './Control';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

let subDesc=['HTML is for information...',
        'CSS is for design...', 'JS is for programming...'];

export default function Dictionary() {
  
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
    <div className="Home">
      <Subject title='Welcome to Dictionary' sub='All words related to Internet...'
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
      }}/>
      {mode==='read'? <ReadContent title={contTitle} desc={contDesc} /> : ''}
      {mode==='create'? <CreateContent onCreateContent={(_title,_desc)=>{
        console.log(_title,_desc);
        const newContents = lineContents.concat(_title);
        setLineContents(newContents);
        subDesc.push(_desc);

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

          // method #2
          let newContents=Array.from(lineContents);
          newContents[i] = _title;

          setLineContents(newContents);

          // method #2
          subDesc[i] = _desc;

          setContTitle(newContents[i]);
          setContDesc(subDesc[i]);
          setMode('read');

      }}/> : ''}

      {mode==='delete'? deleteContents():''}

    </div>
  )
}

function onDeleteContents(index, lineContents){
  const deleteContents = Array.from(lineContents);
  deleteContents.splice(index,1);
  return deleteContents;
}