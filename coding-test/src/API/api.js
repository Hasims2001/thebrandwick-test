import axios from 'axios';
export const doLogin = async (formData, handleIsAuth, handleError)=> {
    
    try {
        let res = await axios.post(`${process.env.REACT_APP_API_LINK}/user/login`, formData);
        res = await res?.data;
        if(!res.issue){
            handleIsAuth(true, res.user)
        }else{
            handleError(res.msg)
        }
    } catch (error) {
        handleError(error.message)
    }
}


export const doSignUp = async (formData, handleIsAuth, handleError)=> {
    
    try {
        let res = await axios.post(`${process.env.REACT_APP_API_LINK}/user/signup`, formData);
        res = await res?.data;
        if(!res.issue){
            handleIsAuth(true, res.user)
        }else{
            handleError(res.msg)
        }
    } catch (error) {
        handleError(error.message)
    }
}

export const doLogout = async(token, handleIsAuth, handleError)=>{
    try {
        let res = await axios.get(`${process.env.REACT_APP_API_LINK}/user/logout`, {headers: {auth: token}});
        res = await res?.data;
        if(!res.issue){
            handleIsAuth(false, {email: "", token:""})
        }else{
            handleError(res.msg)
        }
    } catch (error) {
        handleError(error.message)
    }
}


export const getPrivateRoute = async(token, handleResult, handleError)=>{
    try {
        let res = await axios.get(`${process.env.REACT_APP_API_LINK}/`, {headers: {auth: token}});
        res = await res?.data;
        if(!res.issue){
            handleResult(res.msg)
        }else{
            handleError(res.msg)
        }
    } catch (error) {
        handleError(error.message)
    }
}