import './App.css';
import Dictionary from './Components/Dictionary';
import Community from './Components/Community';
import Home from './Components/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dictionary' element={<Dictionary/>} />
        <Route path='/Community/*' element={<Community/>} />
        {/* <Route path='/Community/1' element='xxx' /> */}
        {/* <Route path='*' element='Not Found...' /> */}
      </Routes>
    </Router>
  )
}