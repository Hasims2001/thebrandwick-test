import React, { useContext, useEffect, useState } from 'react'
import { Login } from '../Components/Login'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import styles from "../Styles/Authentication.module.css";
import { SignUp } from '../Components/SignUp'
interface AuthenticationProps{
  visit: string
}
export const Authentication = ({visit="login"}:AuthenticationProps) => {
  const [current, setCurrent] = useState<string>(visit)
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuth){
      navigate("/", {replace: true})
    }
  }, [isAuth, navigate])
 
  useEffect(()=>{
    setCurrent(visit)
  }, [visit])
  return (
    <div className={styles.container}>
     {current === "login" ? <Login  />: <SignUp />}
    </div>
  )
}
