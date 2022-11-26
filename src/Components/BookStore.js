import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import BookList from './BookList';
import './styles.css';
import { ToasterProvider } from "./BookUI/ToasterContext";
import BookDetails from "./BookDetails";
import SignIn from "./SignIn";
// import { StateProvider, useStateValue } from "../StateProvider";
import { useStateValue } from "../StateProvider";
// import reducer, { initialState } from "../reducer";
import { auth } from "../FirebaseInit";
import { Header } from "./BookUI";

// const heavyWork = ()=>{
//   console.log('heavy work...');
// }

const BookStore = () =>{

  const [{user}, dispatch] = useStateValue();
  // const [heavy, setHeavy] = useState(heavyWork);

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      // console.log('auth',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[user]);

  return(
    // <StateProvider initialState={initialState} reducer={reducer}>
    <ToasterProvider>
    <div className="BookStore">
      <Header/>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to={'/BookStore'}>
        <h1> Book Store </h1>
      </NavLink>
      <br/>
      <NavLink to ={"/BookStore/book/:id"}/>
      <NavLink to ={"/BookStore/login"}/>
    </div>

    <Routes>
      <Route path="/" element={<BookList/>}/>
      <Route path="/book/:id/*" element={<BookDetails/>}/>
      <Route path='/login' element={<SignIn/>}/>
    </Routes>

    </ToasterProvider>
    // </StateProvider>
    
  )
}

export default BookStore;