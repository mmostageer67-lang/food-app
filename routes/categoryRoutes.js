const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const creatCategoryController = require('../controllers/categoryControllers')
const router=express.Router()
router.post('/creat',authMiddleware,creatCategoryController)

module.exports=router
