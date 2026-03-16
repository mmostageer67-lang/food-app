const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { creatFood, updateFood, deleteFood } = require('../controllers/foodControllers')
const router=express.Router()

router.post('/create',authMiddleware,creatFood)
router.put('/update/:id',authMiddleware,updateFood)
router.delete('/delete/:id',authMiddleware,deleteFood)

module.exports=router

