import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Authentication } from "../Pages/Authentication";

interface PrivateRouterProps{
    children: any
}
export const PrivateRouter = ({children}:PrivateRouterProps) => {
  const {  isAuth } = useContext(AppContext);
    if(isAuth){
        return children
    }else{
        return <Authentication visit="login" />
    }
   
}
