const express =require("express");
const route =express.Router();
const post = require("../Modules/Post");
const user = require("../Modules/Users")


route.post('/', async (req, res) => {
    const { userId, title,body } = req.body;
    try {
      const User=await user.findOne({
        where: {
          id: userId
        },
        attributes:['role']
      });
       if(User.role==='admin'){
        const NewPost = await post.create({ userId, title, body });
        res.status(201).json(NewPost);
       }else{
            res.status(404).send("YOU DONT HAVE PERMISION TO ACCESS THIS FEATURE ⛔")
       }
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create post' });
    }
});
module.exports = route;


