import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../FirebaseInit";
import { useStateValue } from "../StateProvider";
import AddBook from "./BookComponents/AddBook";
import BookItem from "./BookItem";


function BookList(){
  const [books, setBooks] = useState([]);
  const [{user}] = useStateValue();

  useEffect(()=>{
    db.collection('books').onSnapshot(data => setBooks(data.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }))))
  },[]);

  // console.log(user);

  return (
    <div className="bookList">
      {user && (user.uid === "Ap7qLIUN2ZWd1ltLa9u0lb1XUuh2"? <AddBook />:'')}      
      <div>------------------------------------------------</div>
      {user? (
        !books.length ? "Loading...." : books.map(book=><BookItem  key={book.id} book={book}/>)
        ): <Link to = "/BookStore/login">Please, Login</Link>
      } 
      {/* {!books.length ? "Loading...." : books.map(book=><BookItem  key={book.id} book={book}/>)} */}
    </div>
  )
}

export default BookList;