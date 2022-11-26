import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import db from "../FirebaseInit";
import BookAuthors from "./BookDetails/BookAuthors";
import BookGeneral from "./BookDetails/BookGeneral";
import BookMenu from "./BookDetails/BookMenu";
import BookPhotos from "./BookDetails/BookPhotos";

function BookDetails(){
  const {id} = useParams();
  const [book, setBook] = useState([]);
  // const match = useMatch('./BookStore/book/0BoNNTozXQdLgIEWWDVF');
  // const match = useMatch(`BookStore/book/${id}`);
  // const matchAuthors = useMatch(`BookStore/book/${id}/Authors`);
  // const match={path : 'id/'};
  // console.log('id', id);

  useEffect(()=>{
    try{
      db.collection('books').doc(id).onSnapshot((snapshot)=>{
        setBook(snapshot.data()); //한번만 onSnapshot을 하면 db가 update되면 계속 setBook이 실행??
        // console.log('snapshot:',snapshot);
      });
      // console.log("book taking..");
    } catch(e){
      console.log('some error :', e);
    }
    // console.log("book useEffect...")
  },[]);

  return(
    <div className="bookDetails">
      <BookMenu url={`/BookStore/book/${id}`}/>
      {book?(
        <Routes>
          {/* <Route path={`${match.pathname}`} exact */}
          {/* <Route path={`./BookStore/book/${id}/General`} exact */}
          <Route path={`/General`} 
          element={<BookGeneral book={book} id={id}/>}/>
          {/* <Route path={`${match.pathname}/Authors`} exact  */}
          <Route path={`/Authors`} 
          element={<BookAuthors book={book} id={id}/>}/>
          {/* <Route path={`${match.pathname}/Photos`} exact  */}
          <Route path={`/Photos`}  
            element={<BookPhotos book={book} id={id}/>}/>
        </Routes>
      ):'no data...'}
      {/* <h2>Book Detail</h2>
      <h5>{id}</h5>
      <p>{book && book.title}</p> */}
      {/* {    console.log("book detail:",book)} */}
    </div>
  );
}

export default BookDetails;