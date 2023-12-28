import React, { useContext, useState } from 'react';
import login from "../Assets/login.png";
import { InputDesign } from './InputDesign';
import { ButtonDesign } from './ButtonDesign';
import { Link } from 'react-router-dom';
import { doLogin } from '../API/api';
import { AppContext } from '../AppContext';



export const Login = () => {
  const {  handleIsAuth } = useContext(AppContext);
  const [error, setError] = useState({email: "", password: ""})
  const handleError = (msg: string)=>{
    setError({email: msg, password: ""})
  }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const email:string = (form.elements.namedItem('email') as HTMLInputElement).value;
      const password:string = (form.elements.namedItem('password') as HTMLInputElement).value;

     
      if(email && password){
        doLogin({email, password}, handleIsAuth, handleError)
      }
    }
  return (
    <>
     <div>
          <img src={login}  width={400} height={400} alt='login vector img'/>
      </div>
      <div>
         <form onSubmit={(e)=> handleSubmit(e)}>
          <h2>Login Now!</h2>
          <div style={{display: 'flex', marginTop: '2rem', flexDirection: 'column', gap:'1rem', alignItems: 'center'}}>
            <InputDesign typed='email' Error={error.email}  placeHolder='Email...' named='email' />
            <InputDesign typed='password' Error={error.password} placeHolder='Password...' named='password' />
            <ButtonDesign typed='submit' valued={"Login"} />
          </div>
         </form>
       
        <Link to={"/signup"}><p>Don't have account?</p></Link>
      </div>
    </>
  )
}
