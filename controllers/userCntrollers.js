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

const updateUser=()=>
{

}
module.exports={getUserControllers,updateUser}