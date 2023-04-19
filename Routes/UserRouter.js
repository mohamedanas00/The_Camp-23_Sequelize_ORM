const express =require("express");
const route =express.Router();
const User = require("../modules.js/user")

route.get("/",async(re,res)=>{
    const user =await User.findAll();
    res.send(user);
})

route.post("/",async(re,res)=>{
    const nequser =await User.findAll();
    name:req.body.name;