const express=require('express')
const app=express();
// const {homeRoute}=require('./Routes/route.js')
const route=require('./Routes/route.js')
const PORT=8080;

app.use(express.json())


app.use('/',route)


app.listen(PORT, ()=>(
    console.log(`Server running on port ${PORT}`)  // log the port where the server is running
))