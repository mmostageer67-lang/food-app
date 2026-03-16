const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { creatFood, updateFood, deleteFood, placeOrderControllers, placeOrderController, postOrder, orderStatusController } = require('../controllers/foodControllers')
const router=express.Router()

router.post('/create',authMiddleware,creatFood)
router.put('/update/:id',authMiddleware,updateFood)
router.delete('/delete/:id',authMiddleware,deleteFood)
router.post('/placeorder',authMiddleware,placeOrderController)
router.post('/orderStatus/:id',authMiddleware,authMiddleware,orderStatusController)

module.exports=router

