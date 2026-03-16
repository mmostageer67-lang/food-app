const foodModel=require('../models/categoryModel')
const creatFood=async(req,res)=>
{
    try {
        const {title,
Descriotin,
price,
imageUrl,
foodTgs,
code,
category,
isAvilable,
resturant,
rating,
totalRting,
}=req.body
if(
!title ||
!Descriotin ||
!price 

){
return res.status(400).send({
success:false,
message:"Please provide all required fields"
})
}
const newFood=new foodModel({
    title,
Descriotin,
price,
imageUrl,
foodTgs,
code,
category,
isAvilable,
resturant,
rating,
totalRting,
})
await newFood.save()
res.status(201).json({
    cuccess:true,
    message:'the foode is created',
    newFood
})
    } catch (error) {
       res.status(500).json({
        success:false,
        message:'error in food api!'
       }) 
    }
}
module.exports={creatFood}