import React from "react";
import { getBase64URL } from "./BookFunctions/imageFn";
import { Button, Field, Message } from "./BookUI";
import profileImg from './BookUI/profile_img.png';

function AuthorForm({error, saving, onSubmit, author, setAuthor}){
  // const imgRef = useRef();
  // imgRef.current.src = author.photo;

  // useEffect(()=>{
  //   if(author.name==="") imgRef.current.src="";
  // },[author, saving,error])

  const handleFile=async (e)=>{
    const base64URL = await getBase64URL(e.target.files[0]);
    setAuthor({...author, photo: base64URL})

    // const file = e.target.files[0];
    // if(!file.type.startsWith('image/')) return;
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = (e) => {
    //   // console.log('e:',e.target.result);
    //   // imgRef.current.src = e.target.result;
    //   // imgRef.current.src = "";
    //   setAuthor({
    //     ...author,
    //     photo: e.target.result
    //   })
    // }
  }
  
  const handleChange=(e)=>{
    // if(author.name==="") imgRef.current.src="";
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    })
  }
  // console.log("author form - rendered..");

  return(
    <form onSubmit={onSubmit}>
      <Field labelText = 'Author' id='author-name'>
        <input type="text" name='name' id='author-name'
          placeholder='name' value={author.name} onChange={handleChange}/>
      </Field>
      <Field labelText = 'Photo' id='author-photo'>
        <div>
        <figure>
        {/* {author.name===""? (<img ref={imgRef} src={profileImg} width='0' alt=""/>)
          : (<img ref={imgRef} src={profileImg} width='50' alt=""/>)} */}
        {/* {author.name===""? imgRef.current.src="":""} */}
        {/* <img ref={imgRef} src={profileImg} width='50' alt=""/> */}
        <img src={author.photo===""? profileImg:author.photo} width='50' alt=""/>
        </figure>
        <input type="file" name='photo' id='author-photo'
         accept="image/*" onChange={handleFile}/>
        </div>
      </Field>
      <Field labelText = 'Description' id='author-descrip'>
        <textarea name='description' id='author-descrip' rows='5'
         value={author.description} onChange={handleChange}/>
      </Field>

      <Message type='error' text={error}/>
      <Button saving={saving} type='submit'>Saving an author..</Button>
    </form>
  )
}

export default AuthorForm;