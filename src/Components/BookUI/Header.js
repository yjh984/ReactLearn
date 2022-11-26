import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { auth } from "../../FirebaseInit";
import { useStateValue } from "../../StateProvider";

const StyledHead = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: lavender;
  position: sticky;
  top: 0;
  z-index: 100;

  .title{
    margin-right: 30px;
  }
  .header_search{
    display: flex;
    flex: 0.5;
    align-items: center;
    border-radius: 24px;
  }
  .header_searchInput{
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
  .header_searchIcon{
    padding: 5px;
    height: 22px;
    background-color: #cd9042;
  }
  .header_option{
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    align-items: center;
  }
  .header_optionLineOne{
    font-size: 10px;
    color: black;
    font-weight: bold;
  }
  .header_optionLineTwo{
    font-size: 10px;
    font-weight: 800;
    margin-top: 3px;
    cursor: pointer;
  }

`;

function Header(){

  const [{user}] = useStateValue();
  const nav = useNavigate();

  const handleLogInOut = ()=>{
    // nav('/BookStore');
    if(user){
      // console.log('logout...b');
      auth.signOut();
      // console.log('logout...a');
      nav('/BookStore');
      // console.log('logout...aa');
    } else{
      nav('/BookStore/login');
    }
    // nav('/BookStore');
  }

  return(
    <StyledHead>
      <h1 className="title"><Link to ='/BookStore'>
        Book Search...  
      </Link></h1>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>
      <div className="header_option">
        <span className="header_optionLineOne">
          {user? user.email : 'You are a guest'}
        </span>
        {/* <Link to={!user && '/BookStore/login'}> */}
        <span className="header_optionLineTwo" onClick={handleLogInOut}>
          {user? 'Logout' : 'Login'}
        </span>
        {/* </Link> */}
      </div>
    </StyledHead>
  )
}

export default Header;