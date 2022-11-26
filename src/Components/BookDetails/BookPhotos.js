import firebase from "firebase";
import React, { useState } from "react";
import db, { storageRef } from "../../FirebaseInit";
import { getBase64URL, resizeImg } from "../BookFunctions/imageFn";
import { Divider, DropBox, Gallery, ImgProgress } from "../BookUI";

function BookPhotos({book, id}){
  const [images, setImages] = useState([]);

  const onFiles=async(files)=>{
    for(let i=0; i<files.length; i++){
      try{
      const base64URL = await getBase64URL(files[i]);
      setImages(images=>[...images, {url: base64URL, percent:0}]);

      const blob = await resizeImg(base64URL, 2000);
      const imageName = `images/books/${Date.now()}.jpeg`;
      const uploadTask = storageRef.child(imageName).put(blob, {contentType: 'image/jpeg'});

      uploadTask.on('state_changed', snapshot=>{
        let percent = snapshot.bytesTransferred/snapshot.totalBytes*100;
        // console.log(percent);
        setImages(imgs=>imgs.map((img,j)=>(j===i? {url:img.url, percent:percent}: img)));
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
          setTimeout(()=>setImages(imgs=>imgs.filter((img,j)=> j===i)),800);
          await db.collection('books').doc(id).update({
            photos:firebase.firestore.FieldValue.arrayUnion(downloadURL)
          });
      })

    } catch (e){
      console.error(e);
    }

    //   const reader=new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload=(e)=>{
    //     setImages(images=>[...images, e.target.result]);
    //   }
    }
  }

  return (
    <>
      <h1>Author's Photo Inform</h1>
      {book.photos && book.photos.length?
        (<Gallery imgs={book.photos} id={id}/>) : (<p>no photo in list</p>)
      }
      {/* {console.log(images)} */}
      {/* {images.map(img=>
        <img key={Math.random()} src={img} width='90' alt=''/>  
      )} */}
      
      <Divider/>
      <DropBox onFiles={onFiles}/>

      {images.map(img=>
        <ImgProgress key={Math.random()} imgURL={img.url} percent={img.percent}/>  
      )}
      {/* {images? (console.log(images[0].percent)):''} */}

    </>
  )
}

export default BookPhotos;