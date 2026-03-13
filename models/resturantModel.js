const mongoose=require('mongoose')

const resturantSchema=new mongoose.Schema({


},{timestamps:true})
module.exports=mongoose.model('Resturant',resturantSchema)