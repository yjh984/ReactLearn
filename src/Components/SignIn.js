import { auth } from "../FirebaseInit";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Field, Message } from "./BookUI";
import { ToasterContext } from "./BookUI/ToasterContext";

function SignIn(){

  // const [login, setLogin] = useState({
  //   email:'',
  //   password:'',
  // });

  // const handleChange=(e)=>{
  //   setLogin({
  //     ...login,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(login);
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(email,',',password);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignin, setLoadingSignin] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {addToast} = useContext(ToasterContext);
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
    // inputRef.current.value='test';
  },[]);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoadingLogin(true);
    try{
      await auth.signInWithEmailAndPassword(email, password);
      addToast({text:'success to login', type:'success'});
      navigate('/BookStore');
    }catch(e){
      console.error(e);
      setError(e.message);
      addToast({text:'fail to login',type:'error'});
    }
    setLoadingLogin(false);
  }

  const handleRegis = async(e)=>{
    e.preventDefault();
    setLoadingSignin(true);
    try{
      await auth.createUserWithEmailAndPassword(email, password);
      addToast({text:'success to Sign-in', type:'success'});
      navigate('/BookStore');
    }catch(e){
      console.error(e);
      setError(e.message);
      addToast({text:'fail to Sign-in',type:'error'});
    }
    setLoadingSignin(false);
  }

  return(
    <div className="signIn">
      <h2>Login</h2>
      <br/>
      <form>
        <Field labelText='Email '>
          <input ref={inputRef} type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <div> admin : yjh984@daum.net, member : yjh984@kg21.net and etc</div>
        </Field>
        <br/>
        <Field labelText='Password '>
          <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Field>
        <br/>
        <Button type='submit' saving={loadingLogin} onClick={handleSubmit}>Login...</Button>
        <Button type='submit' saving={loadingSignin} onClick={handleRegis}>Sign-in...</Button>
        <Message text={error} type='error'/>
      </form>

    </div>
  )
};

export default SignIn;