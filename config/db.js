const mongoose=require('mongoose')
 const connectDb=async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log(`"connect to db"${mongoose.connection.host}`)
    }catch(error)
    {
console.log("db error",error)

    }
}
module.exports=connectDb