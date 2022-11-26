import React from "react";
import EditBook from "../EditBook";

function BookGeneral({book, id}){
  // console.log('bookgeneral',book);
  return (
    <div className="BookGeneral">
      <h1> Modifying </h1>
      <p>Book : {book.title}</p>
      <hr/>
      <EditBook book={book} id={id}/>
    </div>
  )
}

export default BookGeneral;