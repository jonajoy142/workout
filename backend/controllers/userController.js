// login user
const User = require('../models/userModel')
// const validator = require('validator')
const jwt  = require('jsonwebtoken')

const createToken = (_id)=>{
  return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'3d'})
}

const loginUser = async(req,res)=>{
    res.json({mssg:'login user'})
}

//signup user
const signupUser = async(req,res)=>{
    const {email,password} = req.body
    try{
     const user = await User.signup(email,password)

     //create Tokeken

     const token = createToken(user._id)
     res.status(200).json({email,token})
    }catch(error){
      res.status(400).json({error:error.message})
    }
   
}

module.exports = {signupUser,loginUser}