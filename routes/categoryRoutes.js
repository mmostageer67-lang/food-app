const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {creatCategoryController, getAllCategorys, updateCategory} = require('../controllers/categoryControllers')
const router=express.Router()
router.post('/creat',authMiddleware,creatCategoryController)
router.get('/getAll',getAllCategorys)
router.put('/update/:id',authMiddleware,updateCategory)


module.exports=router

