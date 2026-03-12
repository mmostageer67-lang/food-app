const express=require('express')
const { testControllers } = require('../controllers/testControllers')
const router=express.Router()
router.get('/test-user',testControllers)

module.exports=router