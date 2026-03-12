const userModel = require("../models/userModel")
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')
const registerControllers=async(req,res)=>{
    try{
const {userName,email,password,phone ,address,answer}=req.body
if(!userName||!email||!password||!phone||!address||!answer)
{
   return res.status(400).json({
        
        succes:false,
        message:'you have problem n filedes pleas complete it!'})
}
const existing=await userModel.findOne({email})
if(existing)
{
    return res.status(500).json ({
        succes:false,
        message:'this user already exist.'})
}
var salt=bcrypt.genSaltSync(10)
const hashPassword=await bcrypt.hash(password,salt)


const user =await userModel.create({userName,email,password:hashPassword,phone ,address,answer})
res.status(201).json({
    succes:true,
    message:'the user created succsessfully.',
    user   
})
    }catch(error)
    {
        res.status(500).json({
            succes:false,
            message:'error in API!',
            error:error.message
        })
    }
}
const loginControllers=async(req,res)=>
{
try{
const{email,password}=req.body
if(!email||!password)
{
   return res.status(400).json({
        succes:false,
        message:'EMAIL OR PASSWORD INCORRECT!'
    
    })}
    const user=await userModel.findOne({email})
if(!user)
{
    return res.status(404).json({
        succes:false,
        message:'the user not found!',
        
    })
}
const isMarch=await bcrypt.compare(password,user.password)
if(!isMarch)
{
   return res.status(400).json({
        succes:false,
        message:'invalide credintial!'
    })
}
user.password=undefined
const token=JWT.sign({id:user._id},process.env.GWT_SECRET,{expiresIn:'7d'})
    res.status(200).json(
        {
            succes:true,
            message:'the login sucsses',
            token,
            user
        }
    )

}catch(error)
{
res.status(500).json({
    succes:false,
    messsage:'ERROR IN LOGIN API!'
    ,
    error :error.message
})
}

}
module.exports={registerControllers,loginControllers}