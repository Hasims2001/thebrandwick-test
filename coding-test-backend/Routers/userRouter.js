const express = require('express');
const { UserModel } = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {blacklist} = require("../blacklist");
const userRouter = express.Router();
require('dotenv').config();

userRouter.post("/signup",async (req, res)=>{
    const {name, username, phone, email, password} = req.body;
    try{
        let user = await UserModel.findOne({email})
        if(user){
            res.status(200).json({msg: "email is already exists!", issue: true})
        }
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err) return err;
            if(hash){
                let newUser = new UserModel({name, username, email, phone, password:hash})
                await newUser.save()
                res.status(200).json({ msg: "register success!", issue: false });
            }else{
                res.send({msg: "something is wrong, please try after sometime!", issue: true})

            }
        })
    } catch (err) {
        res.send({msg: err.message, issue: true})
    }
})

userRouter.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    try{
        let user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(err) return err;
                if(result){
                    const token = jwt.sign({id: user._id, email: user.email}, process.env.VERIFICATION, { expiresIn: "1d" })
                    res.status(200).json({msg:"login success!", user: {...user._doc, token: token}, issue: false})
                }else{
                    res.status(200).json({msg: "Invalid Credentials", issue: true})
                }
                
            })
        }else{
            res.status(200).json({msg: "Email not found!", issue: true})

        }
    } catch (err) {
        res.send({msg: err.message, issue: true})
    }
})

userRouter.get("/logout", async (req, res) => {
    const token = req.headers.auth;
    if (token) {
        try {
            blacklist.push(token);
            res.send({issue: false, msg: "logout success!"});
        } catch (err) {
            res.end({issue: true, msg: err});
        }
    }
    res.end();
})
module.exports = { userRouter }