const resturantModel = require("../models/resturantModel")

const resturantCntrollers=async(req,res)=>
{
try {
    const {title,
imageUrl,
food,
time,
pickup,
delivery,
isOpen,
logoUrl,
rating,
ratingCount,
code,
coords}=req.body
if (!coords||!title)
{
   return res.status(500).json({
        success:false,
        message:'please provide  adderss  and title'
    })
}
const newResturant =new resturantModel({title,
imageUrl,
food,
time,
pickup,
delivery,
isOpen,
logoUrl,
rating,
ratingCount,
code,
coords})
await newResturant.save()
res.status(200).json({
    success:true,
    message:"new resturant created successfuly"
})
} catch (error) {
  res.status(500).json({
    success:false,
    message:'error in resturant api.',
    error
  })  
}
}
const getAllResturant=async(req,res)=>
{
  try {
    const resturants=await resturantModel.find({})
    if(!resturants)
    {
      res.status(404).json({
        success:false,
        message:'NO RESTURANT AVILABLE'
      })
    }
    res.status(200).json({
      success:true,
      totalCount:resturants.length,
resturants
    })
  } catch (error) {
    res.status(500).json({
success:false,
message:'API ERROR'
    })
  }
}
module.exports = {resturantCntrollers,getAllResturant}
