const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { resturantCntrollers, getAlLresturant, getAllResturant } = require('../controllers/resturantControllers')
const router=express.Router()
router.post('/create',authMiddleware,resturantCntrollers)
router.post('/getAll',authMiddleware,getAllResturant)

module.exports=router