const express =require("express");
const route =express.Router();
const user = require("../Modules/Users")

route.get("/",async(req,res)=>{
    const User =await user.findAll();
    res.send(User);
})

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

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const UpUser = await user.findByPk(id);
      if (!UpUser) {

        return res.status(404).json({ error: 'User not found' });
      }
      await UpUser.destroy();
      res.status(204).send( 'User Deleted Success' );
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to delete user' });
    }
});
module.exports = route;
