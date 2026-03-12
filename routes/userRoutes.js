const express=require('express')
const { getUserControllers, updateUser, updatepassword, resetpassowrd, deleteUser } = require('../controllers/userCntrollers')
const authMiddleware = require('../middleware/authMiddleware')
const router =express.Router()
router.get('/getUser',authMiddleware,getUserControllers)
router.put('/updateUser',authMiddleware,updateUser)
router.post('/updatePassword',authMiddleware,updatepassword)

router.post('/resetPassword',authMiddleware,resetpassowrd)
router.delete('/deleteUser/:id',authMiddleware,deleteUser)


module.exports=router