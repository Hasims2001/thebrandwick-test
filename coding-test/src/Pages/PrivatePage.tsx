import React, { useContext, useEffect, useState } from 'react'
import { getPrivateRoute } from '../API/api';
import { AppContext } from '../AppContext';

export const PrivatePage = () => {
  const [apiData, setApiData] = useState("");
  const { data } = useContext(AppContext);

  const handleResult = (msg: string)=>{
    setApiData(msg)
  }
  const handleError = (msg: string)=>{
    alert(`erorr: ${msg}`)
  }
  useEffect(()=>{
    getPrivateRoute(data.token, handleResult, handleError)
  }, [])
  return (
    <div><p>message: {apiData}</p></div>
  )
}
