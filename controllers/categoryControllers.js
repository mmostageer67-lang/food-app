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
const getAllCategorys=async(req,res)=>
{
    try {
        const categorys=await categoryModel.find({} )
        if(!categorys)
        {
            res.status(500).json({
                cuccess:false,
                message:'CATEGORY NOT FOUND'
            })
        }
        res.status(200).json({
            cuccess:true,
            message:'GET ALL CATEGORYS',
totalCat:categorys.length,
            categorys
        })
    } catch (error) {
        res.status(500).json({
            succes:true,
            message:'error in get categories api.',
            error
        })
    }
}
const updateCategory=async(req,res)=>
{
    try {
        const {id}=req.params
        const{title,imageUrl}=req.body
        if(!title||imageUrl)
        {
            res.status(500).json({
                succes:false,
                message:'PLEASE PROVIDE TITLE OR IMAGEURL'
            })
        }
       const updateCatego = await categoryModel .findByIdAndUpdate(id,{title,imageUrl},{new:true})
         if(!updateCatego)
         {
           res.status(500).json({
                succes:false,
                message:'update category not found!'
            }) 
         }
         res.status(200).json({
            cuccess:true,
            message:'updated successfully.',
            updateCatego
         })
    } catch (error) {
        res.status(500).json({
            cuccess:false,
            message:'error in update category!',
            error
        })
    }
}
module.exports = {creatCategoryController,getAllCategorys,updateCategory}