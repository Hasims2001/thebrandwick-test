import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext';

export const Navbar = () => {
  const {  isAuth } = useContext(AppContext);

  return (
    <div style={{padding: ".5rem 3rem",  display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
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
