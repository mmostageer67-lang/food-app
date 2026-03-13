const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { resturantCntrollers } = require('../controllers/resturantControllers')
const router=express.Router()
router.post('/create',authMiddleware,resturantCntrollers)
module.exports=router