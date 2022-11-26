import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import db from "../FirebaseInit"
import {Button, Field, Message} from "./BookUI";
import { ToasterContext } from "./BookUI/ToasterContext";

function EditBook({book, id}){
  // console.log('EditBook:',book);
  // console.log('book?',book.pubDate? 'true':'false');
  const [bookTitle, setBookTitle]=useState(book.title);
  const [bookPages, setBookPages] = useState(book.pages);
  const [bookPubDate, setBookPubDate] 
    = useState(book.pubDate? book.pubDate.toDate().toISOString().slice(0,10):"");
    // = useState(book? book.pubDate.toDate():"");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  // const [showModal, setShowModel] = useState(false);
  // const navigate = useNavigate();
  
  const handleBook = async (addToast, e)=>{ //param 순서가 영향을 줌??? e, addToast로 하면 error발생..?
  // const handleBook =  (e, addToast)=>{
    // console.log('addToast', addToast);
    e.preventDefault();
    setSaving(true);
    // console.log("set..", id);

    try {
      await db.collection('books').doc(id).set({
        title:bookTitle,
        pages: parseInt(bookPages),
        pubDate: new Date(bookPubDate)
      },{merge:true});
        // .then((docRef)=>{
        //   // console.log(docRef);
        //   // setToasts(['Success adding new book~']);
        // })
      addToast({type:'success', text:'Success to modifying...'});
      // setShowModel(false);
      // navigate(`/BookStore/book/${docRef.id}`);
    } catch (e) {
      // alert(e.message);
      setError('Error for modifying..');
      setTimeout(()=>setError(""),1500);
      addToast({type:'error', text:'Error for modifying!!'})
    }
    
    // setBookTitle('');
    // setBookPages('');
    // setBookPubDate('');
    setSaving(false);
  }

  return(
    <ToasterContext.Consumer>
    {({addToast})=>(
      <>
      <form onSubmit={handleBook.bind(this, addToast)}>
      {/* <form onSubmit={handleBook}> */}
        <Field labelText = 'Title' id='book-title'>
          <input type="text" name='name' id='book-title' value={bookTitle}
            placeholder='title' onChange={(e)=>setBookTitle(e.target.value)}/>
        </Field>
        <Field labelText = 'Pages' id='book-pages'>
          <input type="number" name='pages' id='book-pages' value={bookPages}
            placeholder='pages' onChange={(e)=>setBookPages(e.target.value)}/>
        </Field>
        <Field labelText = 'Published Date' id='book-date'>
          <input type="date" name='date' id='book-date' value={bookPubDate}
            placeholder='date' onChange={(e)=>setBookPubDate(e.target.value)}/>
        </Field>
        {/* <button type='submit' onClick={handleBook}
          disabled={saving}>{saving? 'Saving':'Save'}</button> */}
        <Button saving={saving} type='submit'>Submit</Button>
        <Message text={error} type='error'/>
      </form>
      </>
    )}
    </ToasterContext.Consumer>
  );
}

export default EditBook;