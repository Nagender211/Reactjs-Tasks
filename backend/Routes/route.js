const express=require('express');
const route=express.Router();
const {sendForm,home, updateForm}=require('../Controller/Controller.js')

route.post('/send',sendForm);
route.post('/user/:id',updateForm)
route.get('/',home);

module.exports=route
