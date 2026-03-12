const express=require('express')
const { registerControllers } = require('../controllers/authControllers')
const { loginControllers } = require('../controllers/authControllers')

const router=express.Router()
router.post('/register',registerControllers)
router.post('/login',loginControllers)
module.exports=router