const getUserControllers=async(req,res)=>{
    res.status(200).json({
        message:'get all data'
    })
}

module.exports={getUserControllers}