import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext';
import styles from "../Styles/Navbar.module.css";
import { doLogout } from '../API/api';
export const Navbar = () => {
  const {  isAuth, data, handleIsAuth } = useContext(AppContext);
  const handleError= (val: string)=>{
    alert(`error: ${val}`)
  }
  const handleLogout = ()=>{
    doLogout(data.token, handleIsAuth, handleError)
  }
  return (
    <div className={styles.container}>
        <div>
        <Link to={"/"}><h1 style={{cursor:'pointer'}}>The Brand Wick</h1></Link>
        </div>
        <div style={{display: 'flex', gap:'2rem', fontSize: "large"}}>
            <Link to={"/private"}>Private</Link>
            {!isAuth ?<Link to={"/login"}>Login/Register</Link> : <span style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</span>}
        </div>
    </div>
  )
}
