const express=require('express')
const { getUserControllers, updateUser, updatepassword } = require('../controllers/userCntrollers')
const authMiddleware = require('../middleware/authMiddleware')
const router =express.Router()
router.get('/getUser',authMiddleware,getUserControllers)
router.put('/updateUser',authMiddleware,updateUser)
router.post('/updatePassword',authMiddleware,updatepassword)

//router.post('/resetPassword',authMiddleware,)

module.exports=router