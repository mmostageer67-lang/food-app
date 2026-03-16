const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { resturantCntrollers, getAllResturant, getResturant } = require('../controllers/resturantControllers')
const router=express.Router()
router.post('/create',authMiddleware,resturantCntrollers)
router.get('/getAll',getAllResturant)
router.get('/get/:id',getResturant)

module.exports=router
