const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { resturantCntrollers, getAllResturant, getResturant, deleteResturant } = require('../controllers/resturantControllers')
const router=express.Router()
router.post('/create',resturantCntrollers)
router.get('/getAll',getAllResturant)
router.get('/get/:id',authMiddleware,getResturant)
router.delete('/delete/:id',authMiddleware,deleteResturant)

module.exports=router
