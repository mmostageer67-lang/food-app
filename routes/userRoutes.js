const express=require('express')
const { getUserControllers } = require('../controllers/userCntrollers')
const authMiddleware = require('../middleware/authMiddleware')
const router =express.Router()
router.get('/getUser',authMiddleware,getUserControllers)
module.exports=router