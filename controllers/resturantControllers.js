const resturantModel = require("../models/resturantModel")
const mongoose = require("mongoose")

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
      return res.status(404).json({
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
message:'API ERROR',
error
    })
  }
}
const getResturant=async(req,res)=>
{
  try {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(400).json({
      success:false,
      message:'INVALID RESTURANT ID'
    })
  }

  const resturant=await resturantModel.findById(id)
  if(!resturant)
  {
    return res.status(404).json({
      success:false,
      message:'RESTURANT NOT FOUND!'
    })
  }
  return res.status(200).json({
    success:true,
    resturant
  })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:'Error Api',
      error:error.message
    })
  }
}
const deleteResturant=async(req,res)=>
{
  try {
    const resturantId=req.params.id
    if(!resturantId)
    {return res.status.json({
      success:false,
      message:'THE ID NOT FOUND || RESTURANT !'
    })}
    await resturantModel.findByIdAndDelete(resturantId)

    

    res.status(200).json({
      success:true,
      message:'RESTAURANT DELETED SUCCESSFULLY'
    })
    

  } catch (error) {
    res.status(500).json({
      success:false,
      message:'ERROR IN DELETE API!',
      error
    })
  }
}
module.exports = {resturantCntrollers,getAllResturant,getResturant,deleteResturant}
