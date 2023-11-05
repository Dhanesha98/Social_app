const router = require("express").Router();
const User = require("../Modals/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWTSEC = "#2@!@$ndja45883 r7##";


router.post("/create/user",  
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('username').isLength({ min: 5 }),
    body('phonenumber').isLength({ min: 10 }),
    async(req, res)=>{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json("Some error occured")
        }

        try{

        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(200).json("Please login with correct password")
        };
     const salt  = await bcrypt.genSalt(10);
     const secpass = await bcrypt.hash(req.body.password , salt)

        user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:secpass,
            profile:req.body.profile,
            phonenumber:req.body.phonenumber

        })
   const accessToken = jwt.sign({
         id:user._id,
     username:user.username
 }, JWTSEC);

       await user.save();
        res.status(200).json({user, accessToken })

    }catch (error) {
           return res.status(400).json("Internal error occured") 
    }

})

//Login
router.post("/login", 
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async(req, res)=>{
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json("Some error occured")
            }

            try{
            const user = await User.findOne({email:req.body.email});
            if(!user){
                return res.status(400).json("User doesn't found")
            }

            const Comparepassword = await bcrypt.compare(req.body.password ,  user.password);

            if(!Comparepassword){
                return res.status(400).json("Password error")
            }
            const accessToken = jwt.sign({
                id:user._id,
                username:user.username
            }, JWTSEC);

         const {password , ...other} = user._doc

            res.status(200).json({other, accessToken});
    
}catch (error){
   res.status(500).json("Internal error occured")
    
}
    
})



module.exports =  router;