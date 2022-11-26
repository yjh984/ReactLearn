import './App.css';
import Dictionary from './Components/Dictionary';
import Community from './Components/Community';
import Home from './Components/Home';
import Games from './Components/Games';
import BookStore from './Components/BookStore';
import Blog from './Components/Blog';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AttendanceList from './Components/AttendanceList';
// import NumberBaseball from './Components/NumberBaseball';
// import '../package.json';

export default function App() {
  // console.log("url111 : ",process.env.PUBLIC_URL);
  // <Router basename={process.evn.PUBLIC_URL}>
  return (
    <>
    {/* <h1>Starting Pages~!!!!</h1> */}
    {/* <Router basename='/ReactLearn'> */}
    <Router basename='/'>
      {/* {console.log("url2",process.env.PUBLIC_URL)} */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dictionary' element={<Dictionary/>} />
        <Route path='/Community/*' element={<Community/>} />
        <Route path='/Games/*' element={<Games/>} />
        <Route path='/BookStore/*' element={<BookStore/>} />
        <Route path='/Blog/*' element={<Blog/>} />
        <Route path='/AttendanceList/*' element={<AttendanceList/>} />
        {/* <Route path='/yjh984.github.io/ReactLearn' element={<Home/>}/> */}
        {/* <Route path='/ReactLearn' element={<Home/>}/>         */}
        {/* <Route path='/Games/NumberBaseball' element={<NumberBaseball/>} /> */}
        {/* <Route path='/Community/1' element='xxx' /> */}
        {/* <Route path='*' element='Not Found...' /> */}
      </Routes>
    </Router>
    </>
  )
}