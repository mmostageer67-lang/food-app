const express=require('express')
const mongoose =require('mongoose')

const app=express()
app.use(express.json())
const port=8080
app.get('/',(req,res)=>{res.status(201).json({message:"Welcome"})})
app.listen(port,()=>console.log(`'starting the server ${port}'`))