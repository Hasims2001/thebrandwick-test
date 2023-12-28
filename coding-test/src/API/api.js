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
        console.log(res)
        if(!res.issue){
            handleIsAuth(true, res.user)
        }else{
            handleError(res.msg)
        }
    } catch (error) {
        handleError(error.message)
    }
}
