const express = require('express')
const {registeruser,getuser,getuserbyid,deleteuser,updateuser,Login, getProfile,updateprofile}= require('../Controller/User_controller')
const auth = require('../Middleware/auth')
const route= express.Router();


route.post('/registeruser',registeruser) 
route.post('/login', Login)
route.get('/getuser',getuser)
route.get('/getuserbyid/:id',getuserbyid)
route.delete('/deleteuser/:id',deleteuser)
route.put('/updateuser/:id',updateuser)
route.get('/myprofile',auth,getProfile)
route.put('/updateprofile',auth,updateprofile)


module.exports = route 