const userModel=require('../models/userModel')
const getUserControllers=async(req,res)=>{
    try
    {
const user=await userModel.findById({_id:req.body.id},{_id:0})
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
module.exports={getUserControllers,updateUser}