const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
title:
{
    type:String,
required:[true,' category title is required!']
},
imageUrl:{
    type:String,
default:'https://www.vecteezy.com/free-vector/tasty-food-logo'
},
},{timestamps:true})


module.exports=mongoose.model('category',categorySchema)