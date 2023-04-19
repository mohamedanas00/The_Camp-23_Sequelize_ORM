const express =require("express");
const route =express.Router();
const post = require("../Modules/Post");
const user = require("../Modules/Users");
const Post = require("../Modules/Post");


route.get("/",async(req,res)=>{
    const POST =await post.findAll();
    res.send(POST);
})

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
        res.status(201).send("POST ADD SUCCESSFULY");
       }else{
            res.status(404).send("YOU DONT HAVE PERMISION TO ACCESS THIS FEATURE ⛔");
       }
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create post' });
    }
});

route.put('/:Id', async (req, res) => {
    try {
      const Post=await post.findOne({
        where: {
          id:req.params.Id
        },
        attributes:['userId']
      });
      let i=Post.userId;
      const User=await user.findOne({
        where: {
          id:i
        },
        attributes:['role']
      });
      if(User.role==='admin'){
        const UpPost = await post.findByPk(req.params.Id);
        await UpPost.update(req.body);
        res.send("POST UPDATE SUCEESFULLL");
       }else{
            res.status(404).send("YOU DONT HAVE PERMISION TO ACCESS THIS FEATURE ⛔")
       }  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to Updat post' });
    }
});

route.put('/:Id', async (req, res) => {
  try {
    const Post=await post.findOne({
      where: {
        id:req.params.Id
      },
      attributes:['userId']
    });
    let i=Post.userId;
    const User=await user.findOne({
      where: {
        id:i
      },
      attributes:['role']
    });
    if(User.role==='admin'){
      const dEPost = await post.findByPk(req.params.Id);
      await dEPost.destroy();
      res.send("POST DELETE SUCEESFULLL");
     }else{
          res.status(404).send("YOU DONT HAVE PERMISION TO ACCESS THIS FEATURE ⛔")
     }  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to Updat post' });
  }
});
module.exports = route;


