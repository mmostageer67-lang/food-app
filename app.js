const express=require('express')
const mongoose =require('mongoose')
const morgan =require('morgan')
const colors=require('colors')
const cors =require('cors')
const dotenv=require('dotenv')
const connectDb  = require('./config/db')
dotenv.config()
connectDb()
const app=express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))



app.use('/api/v1/test',require('./routes/testRoutes'))
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/user',require('./routes/userRoutes'))
app.use('/api/v1/Resturant',require('./routes/resturantRoutes'))
app.use('/api/v1/category',require('./routes/categoryRoutes'))

const PORT=process.env.PORT||8080
app.listen(PORT,()=>console.log(`'starting the server ${PORT}'`.bgGreen.white))