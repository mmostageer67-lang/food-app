const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { creatFood } = require('../controllers/foodControllers')
const router=express.Router()

router.post('/create',authMiddleware,creatFood)
module.exports=router

