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
      res.status(201).send("USER ADD SUCCESSFUL");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to Add user' });
    }
})

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const DelUser = await user.findByPk(id);
      if (!DelUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      await DelUser.destroy();
      res.status(204).send( 'User Deleted Success' );
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to delete user' });
    }
});

route.put('/:id', async (req, res) => {
    try {
      const UpUser = await user.findByPk(req.params.id);
      await UpUser.update(req.body);
      res.json(UpUser);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while updating the user.');
    }
  });
module.exports = route;
