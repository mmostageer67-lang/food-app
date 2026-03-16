const categoryModel=require('../models/categoryModel')
const creatCategoryController=async(req,res)=>{
try{
const {title,imageUrl}=req.body
if(!title)
{
    return  res.status(500).json({
            succes:false,
            message:'please provide title or imageUrl!'})
}
const newCategory=new categoryModel({title,imageUrl})
await newCategory.save()
res.status(201).json({
    succes:true,
    message:'category model created successfully',
    newCategory
})
}

    catch(error)
    {
        res.status(500).json({
            succes:false,
            message:'error in creat category API!',
            error:error.message
        })
    }
}
module.exports = creatCategoryController