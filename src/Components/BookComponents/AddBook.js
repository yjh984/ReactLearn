import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../FirebaseInit"
import { useStateValue } from "../../StateProvider";
import {Button, Field, Message, Modal} from "../BookUI";
import { ToasterContext } from "../BookUI/ToasterContext";

function AddBook(){
  const [bookTitle, setBookTitle]=useState('');
  const [bookPages, setBookPages] = useState('');
  const [bookPubDate, setBookPubDate] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [{user}] = useStateValue();
  
  const handleBook = async (addToast, e)=>{ //param 순서가 영향을 줌??? e, addToast로 하면 error발생..?
  // const handleBook =  (e, addToast)=>{
    // console.log('addToast', addToast);
    e.preventDefault();
    setSaving(true);

    try {
      // const docRef = await db.collection('books').add({
      await db.collection('books').add({
        title:bookTitle,
        pages: parseInt(bookPages),
        pubDate: new Date(bookPubDate)
      });
        // .then((docRef)=>{
        //   // console.log(docRef);
        //   // setToasts(['Success adding new book~']);
        // })
      addToast({type:'success', text:'Success to add a new book.'});
      // setShowModal(false);
      // docRef.id ? navigate(`/BookStore/book/${docRef.id}`) : 
      //   navigate('/BookStore');
      // navigate('/BookStore');
    } catch (e) {
      // alert(e.message);
      setError('There are some errors..');
      setTimeout(()=>setError(""),1500);
      addToast({type:'error', text:'Error to add!'})
    }
    
    setBookTitle('');
    setBookPages('');
    setBookPubDate('');
    setSaving(false);
  }

  const handleClick=()=>{
    if(user) {
      setShowModal(true);
      setError(null);
    } else{
      navigate('/BookStore/login');
    }
  }

  return(
    <ToasterContext.Consumer>
    {({addToast})=>(
      <>
      <Button outLine onClick={handleClick}>Add Book</Button>
      {/* props에 keyname만 적으면 default value가 true임.. 없으면 false.. */}
      <Modal title="Adding New Book" show={showModal} close={()=>setShowModal(false)}>
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
      </Modal>
      </>
    )}
      
    </ToasterContext.Consumer>
  );
}

export default AddBook;