import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import db from "../FirebaseInit";
// import { doc, deleteDoc } from "firebase/firestore";
import { ToasterContext } from "./BookUI/ToasterContext";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: auto 50px;
  gap: 20px;
  max-width: 400px;
`;

function BookItem({book}){

  const [{user}] = useStateValue();
  const navigate = useNavigate();
  const {addToast} = useContext(ToasterContext);

  const handleClick=()=>{
    if(user.uid === "Ap7qLIUN2ZWd1ltLa9u0lb1XUuh2"){
      navigate(`./book/${book.id}`);
    } else{
      // navigate('/BookStore/login');
      alert('needs to access an admin!!')
    }
  }
  
  const handleDelete = async(e) => {
    e.preventDefault();

    try{
      // await db.collection('books').onSnapshot(data => setBooks(data.docs.map(doc=>({
      // id:doc.id,
      // ...doc.data()
      // }))));
      console.log("delete try..")
      await db.collection('books').doc(book.id).delete();
      // await deleteDoc(doc(db, "books", "DC"));
      // await deleteDoc(doc(db,'books',book));
      // await docDelete(book);
      addToast({type:'success', text:'success to delete..'});
    } catch(e){
      addToast({type:'error', text:'fail to delete...'});
    }
  }

  return (
    <>
    <GridDiv>
      <div>
        <h3 onClick={handleClick} style={{'cursor': 'pointer'}}>{book.title}</h3>
        <p>
          Title : {book.title}
        </p>
        <p>
          Pages : {book.pages}
        </p>
        <p>
          Published Date : {new Date(book.pubDate.toDate()).toLocaleString()}
        </p>
        {/* <p>------------------------------------</p> */}
      </div>
      {/* {console.log('book:',book)} */}
      {user.uid === "Ap7qLIUN2ZWd1ltLa9u0lb1XUuh2"? (
        <div>
          <a href="./" onClick={handleDelete}>delete</a>
        </div>
        ) : ""}
    </GridDiv>
    <div>------------------------------------------------</div>
    </>
  )
}

export default BookItem;