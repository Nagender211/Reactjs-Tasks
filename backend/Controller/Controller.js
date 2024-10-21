const UserData=require('../models/form.js')
const sendForm=async(req,res)=>{
    const {firstName,lastName,email,time,date,phone}=req.body;
    if(!firstName || !lastName|| !email || !phone){
        return res.status(400).json({error:"All fields are required"})

    }
    try {
        await UserData.create({firstName,lastName,email,time,date,phone});
        res.status(201).json({
            message: "registeation succesfulyy add!!"
        })
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

}

const home=(req,res)=>{
    res.status(200).json({
        UserData
    })
}

module.exports={
    sendForm,
    home
 
}