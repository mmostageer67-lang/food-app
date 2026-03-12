const express=require('express')
const { getUserControllers, updateUser } = require('../controllers/userCntrollers')
const authMiddleware = require('../middleware/authMiddleware')
const router =express.Router()
router.get('/getUser',authMiddleware,getUserControllers)
router.put('/updateUser',authMiddleware,updateUser)
module.exports=router