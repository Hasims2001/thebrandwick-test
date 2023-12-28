import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext';
import styles from "../Styles/Navbar.module.css";
export const Navbar = () => {
  const {  isAuth } = useContext(AppContext);

  return (
    <div className={styles.container}>
        <div>
        <Link to={"/"}><h1 style={{cursor:'pointer'}}>Brand Wick</h1></Link>
        </div>
        <div style={{display: 'flex', gap:'2rem', fontSize: "large"}}>
            <Link to={"/private"}>Private</Link>
            {!isAuth && <Link to={"/login"}>Login/Register</Link>}
        </div>
    </div>
  )
}
