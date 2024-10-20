const express=require('express');
const route=express.Router();
const {sendForm,home}=require('../Controller/Controller.js')

route.get('/send',sendForm);
route.get('/',home);

module.exports=route
