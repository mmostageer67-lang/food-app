const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { creatFood, updateFood } = require('../controllers/foodControllers')
const router=express.Router()

router.post('/create',authMiddleware,creatFood)
router.put('/update/:id',authMiddleware,updateFood)

module.exports=router

