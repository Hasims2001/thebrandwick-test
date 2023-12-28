import React, { useContext, useState } from 'react';
import signup from "../Assets/signup.png";
import { InputDesign } from './InputDesign';
import { ButtonDesign } from './ButtonDesign';
import { Link } from 'react-router-dom';
import { doSignUp } from '../API/api';
import { AppContext } from '../AppContext';



export const SignUp = () => {
  const {  handleIsAuth } = useContext(AppContext);
  const [error, setError] = useState({name:"", username: "", phone: "", email: "", password: ""})
  const handleError = (msg: string)=>{
    setError({...error, email:msg, })
  }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const name:string = (form.elements.namedItem('name') as HTMLInputElement).value;
      const username:string = (form.elements.namedItem('username') as HTMLInputElement).value;
      const phone:string = (form.elements.namedItem('phone') as HTMLInputElement).value;
      const email:string = (form.elements.namedItem('email') as HTMLInputElement).value;
      const password:string = (form.elements.namedItem('password') as HTMLInputElement).value;

     
      if(phone.length !== 10){
        setError({...error, phone: "Please write correct phone number"})
      }else if(name && username && phone && email && password){
        doSignUp({email, password, name, username, phone}, handleIsAuth, handleError)
      }
    }
  return (
    <>
      <div>
         <form onSubmit={(e)=> handleSubmit(e)}>
          <h2>Signup Now!</h2>
          <div style={{display: 'flex', marginTop: '2rem', flexDirection: 'column', gap:'1rem'}}>
            <InputDesign typed='text' Error={error.name}  placeHolder='Name...' named='name' />
            <InputDesign typed='text' Error={error.username}  placeHolder='Username...' named='username' />
            <InputDesign typed='number' Error={error.phone}  placeHolder='Phone...' named='phone' />
            <InputDesign typed='email' Error={error.email}  placeHolder='Email...' named='email' />
            <InputDesign typed='password' Error={error.password} placeHolder='Password...' named='password' />
            <ButtonDesign typed='submit' valued={"Signup"} />
          </div>
         </form>
       
        <Link to={"/login"}><p>Already have account?</p></Link>
      </div>
      <div>
          <img src={signup}  width={400} height={400} alt='signup vector img'/>
      </div>
    </>
  )
}
