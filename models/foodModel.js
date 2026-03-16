const mongoose=require('mongoose')
const foodSchema=new mongoose.Schema({
title:
{
    type:String,
required:[true,' category title is required!']
},
Descreption:{
type:String,
required:[true,'description is erquired']
},
price:{
    type:Number,
    required:[true,'price is required.']
},
imageUrl:{
    type:String,
    default:'https://www.vecteezy.com/free-vector/tasty-food-logo'

},
foodTgs:{
    type:String,
},
code:{
    type:String
},
category:{
    type:String
},
isAvilable:
{
    type:Boolean,
    default:true
},
resturant:{
    type:mongoose.Schema.Types.ObjectId,
ref:'Resturant'
},
rating:{
    type:Number,
    default:1
,
min:1,
max:5
},
totalRting:{
type:String
}
},{timestamps:true})


module.exports=mongoose.model('Foods',foodSchema)