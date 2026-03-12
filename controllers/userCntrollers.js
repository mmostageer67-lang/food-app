const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const getUserControllers=async(req,res)=>{
    try
    {
const user=await userModel.findById({_id:req.body.id})
if(!user)
{
    res.status(404).json({
        succes:false,
        message:'error in id '
    })
}
user.password=undefined
res.status(201).json({
    succes:true,
    message:'get the user',
    user 
})
    }catch(error)
    {
        res.status(500).json({

            succes:false,
            message:'we have problem in api',
            error
        })
    }
}

const updateUser=async(req,res)=>
{
try{
const user =await userModel .findById({_id:req.body.id})
if(!user)
{
  res.status(404).json  ({
    succes:false,
    message:'user not found!'
  })
}
const {userName,address,phone}=req.body
if(userName)user.userName=userName
if(address)user.address=address
if(phone)user.phone=phone
await user.save()
res.status(201).json({
    succes:true,
    message:'user updated success.'
})
}catch(error)
{
    res.status(500).json({
        succes:false,
        message:'error api',
        error
    })
}
}
const updatepassword=async(req,res)=>{
try{
    const user=await userModel.findById({_id:req.body.id})
    if(!user)
    {
   return     res.status(404).json(
           { succes:false,
            message:'user not fond!'}
        )
    }
const {oldPassword,newPassword}=req.body
if(!oldPassword||!newPassword)
{
    res.status(500).json({
        succes:false,
        message:'please provide old or new password'
    })
}
const isMarch=await bcrypt.compare(oldPassword,user.password)
if(!isMarch)
{
   return res.status(400).json({
        succes:false,
        message:'invalide password'
    })
}
 salt=bcrypt.genSaltSync(10)
const hashPassword=await bcrypt.hash(newPassword,salt)
user.password=hashPassword
await user.save()
res.status(201).json({
    succes:true,
    message:'password updated success.',
    
})
}catch(error){
res.status(500).json({
    cucces:false,
    message:"error Api's password!",
    error
})
}
}
module.exports={getUserControllers,updateUser,updatepassword}