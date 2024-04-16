const User = require('../models/UserModel');

const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');


module.exports = {
    createUser:async (req,res) => {
        console.log(req.body.email)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            mobile:req.body.mobile,
            location:req.body.location,
            password:CryptoJs.AES.encrypt(req.body.password, process.env.SECRET).toString(),
            

        });

        try {
            const user = await User.findOne({email:req.body.email});
            console.log(user)
            if(user){
                res.status(401).json("User already exist with this email");
                 return;
            }

            await newUser.save();

            res.status(200).json({message:"User successfully created"})
            return;
            
        } catch (error) {
            res.status(500).json({message:error})
            return;
            

            
        }
    },

    loginUser:async (req,res) =>{
        console.log(req.body)
        try {
            const user = await User.findOne({email:req.body.email});
            console.log(user)
            if(!user){
                res.status(401).json("Wrong credentials please provide a valid email");
                 return;
            }
          

            const decryptedPassword = CryptoJs.AES.decrypt(user.password, process.env.SECRET);
            
            const decryptedpass = decryptedPassword.toString(CryptoJs.enc.Utf8);
      
            decryptedpass !== req.body.password && res.status(401).json("Wrong password");
            
            const userToken = jwt.sign(
                {
                    id:user.id
                },process.env.JWT_SEC, {expiresIn:"3d"}
            );

            const {password, __v, createdAt,updatedAt, ...userData} = user._doc;

            res.status(200).json({...userData, token:userToken})
            return;

        } catch (error) {
            res.status(500).json({message:"Error while login"})
            return;
            
        }

    },
}