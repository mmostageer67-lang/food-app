const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
    type:String,
    required:[true,'user name required']
},
email:
{
type:String,
required:[true,'email is required'],
    unique:true
},
password:
{
    type:String,
    required:[true,'pasword is required.']
},
address:{
    type:Array
},
phone:
{
    type:String,
    required:[true,'phone number reqyored']
},
typeUser:
{
    type:String,
    required:[true,'user type required'],
    default:'client',
    enum:['client','admin','vonder','driver']
},
profile:
{
    type:String,
    default:'data:image/png;base64,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'
},
answer:
{
type:String,
required:[true,'Answer is required!']
},
},{timestamps:true})
module.exports=mongoose.model('User',userSchema)
