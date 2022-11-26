import firebase from "firebase";
import React, { useContext } from "react";
// import styled from "styled-components";
import db, {storage} from "../../FirebaseInit";
import { ToasterContext } from "../BookUI/ToasterContext";
import profileImg from '../BookUI/profile_img.png';
import {StringTrim} from "../BookFunctions/StringFn";

// const StyledP = styled.p`
//   list-style: none;
//   padding:0;

//     padding:4px;
//     margin: 5px;
//     background-color: #f0f0f0;
//     display: inline-block;
// `;


function BookAuthor({author, id}){
  const {addToast} = useContext(ToasterContext);
  const handleDelete = async(e) => {
    e.preventDefault();

    try{
      if(author.photo !=="") {
        await storage.refFromURL(author.photo).delete();
      }
      await db.collection('books').doc(id).update({
        authors:firebase.firestore.FieldValue.arrayRemove(author)
      });
      addToast({type:'success', text:'success to delete..'});
    } catch(e){
      addToast({type:'error', text:'fail to delete...'});
    }
  }

  return(
    <>
      <figure>
        <img src={author.photo===""? profileImg:author.photo} width='90' alt=""/>
      </figure>
      <div>
        <h5>{author.name}</h5>
        <p>{StringTrim(author.description)}</p>
      </div>
      <div>
        <a href="./" onClick={handleDelete}>delete</a>
      </div>
    </>
  )
}

export default BookAuthor;