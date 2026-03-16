const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {creatCategoryController, getAllCategorys, updateCategory, deleteCategory} = require('../controllers/categoryControllers')
const router=express.Router()
router.post('/creat',authMiddleware,creatCategoryController)
router.get('/getAll',getAllCategorys)
router.put('/update/:id',authMiddleware,updateCategory)

router.delete('/delete/:id',authMiddleware,deleteCategory)

module.exports=router

