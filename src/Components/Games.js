import React, { useState } from 'react';
import {Routes, Route, NavLink } from 'react-router-dom';
import Lotto from './Lotto';
import NumberBaseball from './NumberBaseball';
import ResponseTest from './ResponseTest';
import RSP from './RSP';
import TicTacToe from './TicTacToe';
import MineSearch from './MineSearch';
import { AppsOutline, BaseballOutline, CloseCircleOutline, CutOutline, DiceOutline, SpeedometerOutline } from 'react-ionicons';
import './Game.css';
import GameOthers from './GameOthers';


export default function Games(){
  // const [active, setActive] = useState(['','','','','','']);
  const [active, setActive] = useState([]);

  const onClickItem = (item)=>{
    // console.log('item',item);
    const temp = Array(active.length).fill('');
    temp[item]='active';
    setActive(temp);
  }

  // console.log('active',active);
  
  return(
    <>
    <h1> Welcome to Game World</h1>
    <NavLink to='/'>Home</NavLink><p/>
    <div>Choose any game you want...</div>
    <div className='navigation'>
    <ul>
      <li className={`list ${active[0]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(0)} to ={'/Games/NumberBaseball'}>
          <span className='icon'>
          <BaseballOutline
            color={'#00000'} 
            title={'Baseball'}
            height="40px"
            width="40px"
          />
          </span>
          <span className='text'>Number Baseball</span>
        </NavLink>
      </li>
      <li className={`list ${active[1]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(1)} to ={'/Games/ResponseTest'}>
          <span className='icon'>
            <SpeedometerOutline
              color={'#00000'} 
              title={'Speedometer'}
              height="40px"
              width="40px"
            />
          </span>
          <span className='text'>Response Test</span>
        </NavLink>
      </li>
      <li className={`list ${active[2]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(2)}  to ={'/Games/RSP'}>
          <span className='icon'>
            <CutOutline
              color={'#00000'} 
              title={'RSP'}
              height="40px"
              width="40px"
            />
          </span>
          <span className='text'>Rock Scissors Paper</span>
        </NavLink>
      </li>
      <li className={`list ${active[3]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(3)} to ={'/Games/Lotto'}>
          <span className='icon'>
            <DiceOutline
              color={'#00000'} 
              title={'Lotto'}
              height="40px"
              width="40px"
            />
          </span>
          <span className='text'>Lotto</span>
        </NavLink>
      </li>
      <li className={`list ${active[4]}`}>
       <NavLink className='nl' onClick={()=>onClickItem(4)} to ={'/Games/TicTacToe'}>
         <span className='icon'>
          <CloseCircleOutline
              color={'#00000'} 
              title={'TicTacToe'}
              height="40px"
              width="40px"
            />
         </span>
         <span className='text'>Tic Tac Toe</span>
       </NavLink>
      </li>
      <li className={`list ${active[5]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(5)} to ={'/Games/MineSearch'}>
          <span className='icon'>
            <AppsOutline
              color={'#00000'} 
              title={'Mine'}
              height="40px"
              width="40px"
            />
          </span>
          <span className='text'>Mine Search</span>
        </NavLink>
      </li>
      {/* <li className={`list ${active[6]}`}>
        <NavLink className='nl' onClick={()=>onClickItem(6)} to ={'/Games/Others/:name'}>
          <span className='icon'>
            <AppsOutline
              color={'#00000'} 
              title={'Others'}
              height="40px"
              width="40px"
            />
          </span>
          <span className='text'>Others</span>
        </NavLink>
      </li> */}
      {active.length>0 ? <div className='indicator'></div> : null}
    </ul>
    </div>
    <NavLink to={'/Games/Others/other1'}>other1</NavLink> &nbsp;
    <NavLink to={'/Games/Others/other2'}>other2</NavLink> &nbsp;
    <NavLink to={'/Games/Others/other3'}>other3</NavLink>

    <Routes>
      <Route path='/NumberBaseball' element={<NumberBaseball/>} />
      <Route path='/ResponseTest' element={<ResponseTest/>} />
      <Route path='/RSP' element={<RSP/>} />
      <Route path='/Lotto' element={<Lotto/>} />
      <Route path='/TicTacToe' element={<TicTacToe/>} />
      <Route path='/MineSearch' element={<MineSearch/>} />
      <Route path=':name/*' element={<GameOthers/>} />
    </Routes>
</>
  )
}