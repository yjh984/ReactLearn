import { IconButton } from "../BookUI";
// import { Delete } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ToasterContext } from "./ToasterContext";
import firebase from "firebase";
import db, {storage} from "../../FirebaseInit";

const FigureDiv = styled.div`
  position: relative;
  > div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: grey;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0) 30%);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  :hover{
    div{
      opacity: 1;
    }
  }
`;


function Image({img, id}){
  const [loading, setLoading] = useState(false);
  const {addToast} = useContext(ToasterContext);

  let controller = new AbortController();

  useEffect(()=>{
    return()=> {
      // console.log('unmounted Image Comp.');
      controller.abort();
    }
    // return()=> controller?.abort();
    // return()=>console.log('exit from Image component..: ',controller?);
  });
  
  const handleDelete = async() =>{
    setLoading(true);
    try{
      // storage.refFromURL(img).delete();
      // db.collection('books').doc(id).update({
      await storage.refFromURL(img).delete();
      await db.collection('books').doc(id).update({
        photos: firebase.firestore.FieldValue.arrayRemove(img)
      });
      // controller=null;
      addToast({text:'success to delete', type:'success'});
    } catch(e){
      console.error(e);
      addToast({text:'fail to delete!',type:'error'});
    }
    setLoading(false);
  };

  return(
    <FigureDiv>
      <img src={img} height='150' alt=''/>
      <div>
        {/* <Delete className="delete"/> */}
        <IconButton loading={loading} color='white' onDelete={handleDelete} />
      </div>
    </FigureDiv>
  )
}

export default Image;