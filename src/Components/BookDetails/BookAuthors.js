import firebase from "firebase";
import React, { useContext, useState } from "react";
import db, { storageRef } from "../../FirebaseInit";
import AuthorForm from "../AuthorForm";
import { ToasterContext } from "../BookUI/ToasterContext";
import BookAuthor from "./BookAuthor";
import styled from "styled-components";
import { Divider } from "../BookUI";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 90px auto 50px;
  gap: 20px;
  max-width: 600px;
`;

function BookAuthors({book, id}){
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState({
    name: '',
    photo: '',
    description: '',
  });

  async function createImg(photo){
    const img = new Image();
    // console.log('new img:',photo);
    // return img;
    img.src = photo;
    return new Promise(((resolve, reject)=>{
      img.onload=()=>resolve(img);
      // if(img.complete) resolve(img);
      img.onerror=(e)=>reject(e);
    }))
  }

  async function resizeImg(photo){
    const canvas=document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
    const ctx=canvas.getContext('2d');
    // console.log('before createImg')
    const img= await createImg(photo);
    // console.log('img:',img.src);
    // console.log(img);
    const scale=Math.min(canvas.width/img.width, canvas.height/img.height);
    const x = canvas.width/2 - img.width/2*scale;
    const y = canvas.height/2 - img.height/2*scale;
    ctx.drawImage(img,x,y,img.width*scale,img.height*scale);
    return new Promise(resolve=>{
      // console.log("Promise:",img.src)
      canvas.toBlob(blob=>
        resolve(blob)
      );
    });
  }

  const onSubmit = async (author, e)=>{
    // console.log("author updating...", author,id)
    e.preventDefault();
    setSaving(true);
  
    if(author.name!==""){ 
      try{
        // console.log('try....')
        const blob = await resizeImg(author.photo);
        // console.log("blob:",blob);
        const imageRef = storageRef.child(`images/author/${Date.now()}.jpeg`);
        const uploadTask = imageRef.put(blob, {contentType: 'image/jpeg'});
        
        uploadTask.on('state_changed', (snapshot)=>{
          const progress = snapshot.bytesTransferred/snapshot.totalBytes*100;
          console.log(progress);
        }, (e)=>{
          switch (e.code){
            case 'storage/unauthorized' :
              console.error('no authorized path...');
              break;
            case 'storage/unknown' :
              console.error(e.serverResponse);
              break;
            default:
              break;
          }
        }, async ()=>{
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          console.log('downURL',downloadURL);
          await db.collection('books').doc(id).update({
            authors:firebase.firestore.FieldValue.arrayUnion({...author, photo: downloadURL})
          });
          setAuthor({
            name:'', photo:'',description:''
          });
          addToast({type:'success', text:'Success to Add..'});
          setSaving(false);
        });
      } catch(e){
        setSaving(true);
        setError('fail to add..');
        setTimeout(()=>{setError(null)},1500);
      }
    } else{
      addToast({type:'error', text:"no author's name"});
    }

    setSaving(false);
  }

  const {addToast} = useContext(ToasterContext);
  // console.log("photo:",author.photo);

  return (
    <div className="bookAuthors">
      <h1> Author Information</h1>
      {/* <img src={author.photo} width='50' alt=""/> */}
      {/* <canvas id="canvas" width='50' height='50'/> */}
      <GridDiv>
      {book.authors ? 
        book.authors.map(author=><BookAuthor key={id+author.name} author={author} id={id}/>)
       : <h2>No_Author</h2>}
      </GridDiv>
      <Divider/>
      {/* <h4>Adding an Author..</h4> */}
      <AuthorForm error={error} saving={saving}
       onSubmit={onSubmit.bind(this, author)} author={author}
       setAuthor={setAuthor} />
    </div>
  )
}

export default BookAuthors;