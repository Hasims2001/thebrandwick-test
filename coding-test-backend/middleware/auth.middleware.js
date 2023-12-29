const jwt = require('jsonwebtoken');
require('dotenv').config();
const { blacklist } = require('../blacklist');

const auth = (req, res, next)=>{
    const token = req.headers.auth;
    if(token){
        if(blacklist.includes(token)){
            res.send({ msg: "login again..." })
        }else{
            jwt.verify(token, process.env.VERIFICATION, (err, decoded)=>{
                if(err) return err;
                if(decoded){
                    next();
                }else{
                    res.send({msg:"Invalid Token", issue: true});
                }
            })
        }
       
    }else {
        res.send({msg: "Token not found!", issue: true});
    }
}

module.exports = {
    auth
}