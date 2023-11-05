const router = require("express").Router();
const Post = require("../Modals/Post");
const { verifyToken } = require("./verifytoken");

//Create post
router.post("/user/post" , verifyToken , async(req, res)=>{
  try{
            let {title  , image , video}= req.body;
            let newpost = new Post({
                title ,  image , video , user:req.user.id
            })
            const post = await newpost.save()
            res.status(200).json(post)
  } catch (error) {
           return res.status(500).json("Internal error occured")
    }
})

//upload post by one user
router.get("/get/post" , verifyToken , async(req, res)=>{
  try{
        const mypost = await Post.findOne({user:req.user.id});
        if(!mypost){
            return res.status(400).json("You don't have any post")
        }
        res.status(200).json(mypost)
}catch(error){
        res.status(500).json("Internal server error")
    }
})

//update user post
router.put("update/post/:id" , verifyToken , async(req , res)=>{
      try{
                const post = await Post.findById(req.params.id);
                if(!post){
                return res.status(400).json("Post does not found")
                };
                
                post = await Post.findByIdAndUpdate(req.params.id , {
                    $set:req.body
                })
                let updatepost = await post.save();
                res.status(200).json(updatepost);
        }catch (error){
              return res.status(500).json("Internal error occur")
       }
})

module.exports =  router;