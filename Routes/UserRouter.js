const express =require("express");
const route =express.Router();
const user = require("../Modules/Users")
// route.get("/",async(req,res)=>{
//     const user =await User.findAll();
//     res.send(user);
// })

route.post("/",async(req,res)=>{
    const { Username, password, email,role } = req.body;
    try {
      const Newuser = await user.create({ Username, password, email ,role });
      res.status(201).json(Newuser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create user' });
    }
})
module.exports = route;
