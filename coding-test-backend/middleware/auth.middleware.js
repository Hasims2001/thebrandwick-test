const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth = (req, res, next)=>{
    const token = req.headers.auth;
    if(token){
        jwt.verify(token, process.env.VERIFICATION, (err, decoded)=>{
            if(err) return err;
            if(decoded){
                next();
            }else{
                res.send({msg:"Invalid Token", issue: true});
            }
        })
    }else {
        res.send({msg: "Token not found!", issue: true});
    }
}

module.exports = {
    auth
}