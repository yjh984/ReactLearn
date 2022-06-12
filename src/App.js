import './App.css';
import Dictionary from './Components/Dictionary';
import Community from './Components/Community';
import Home from './Components/Home';
import Games from './Components/Games';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import NumberBaseball from './Components/NumberBaseball';


export default function App() {
  return (
    <Router basename={process.evn.PUBLIC_URL}>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dictionary' element={<Dictionary/>} />
        <Route path='/Community/*' element={<Community/>} />
        <Route path='/Games/*' element={<Games/>} />
        {/* <Route path='/Games/NumberBaseball' element={<NumberBaseball/>} /> */}
        {/* <Route path='/Community/1' element='xxx' /> */}
        {/* <Route path='*' element='Not Found...' /> */}
      </Routes>
    </Router>
  )
}