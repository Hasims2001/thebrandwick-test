import { createContext, useState } from "react";
import React from 'react';
interface ContextAppProps {
    children: React.ReactNode
}

interface Values {
    email: string, token?: string
}
interface AppContextValue {
    isAuth: boolean;
    data: Values;
    handleIsAuth: (auth: boolean, values: Values) => void;
  }
  
export const AppContext = createContext<AppContextValue>({
    isAuth: false,
    data: { email: "", token: "" },
    handleIsAuth: () => {}, 
  });
  

export const ContextApp = ({children}:ContextAppProps)=>{
    const [isAuth,  setIsAuth] = useState(false)
    const [data, setData] = useState({email: "",  token: ""});
    const handleIsAuth = (auth: boolean, values:Values)=>{
        setIsAuth(auth)
       setData({
        email:values.email,  
        token: values.token || ""
       })
    }
    return (
        <AppContext.Provider value={{isAuth, data, handleIsAuth}}>
            {children}
        </AppContext.Provider>
    )
}