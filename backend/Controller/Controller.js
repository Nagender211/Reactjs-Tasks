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
const updateForm=async(req,res)=>{
    const {firstName,lastName,email,time,date,phone}=req.body;
    const { id }=req.params;
    if(!id){
        return res.status(400).json({error:"id is required"})
    }

    try {
        const user=await UserData.findByIdAndUpdate(id,{firstName,lastName,email,time,date,phone},{new:true,runValidators: true})
        if(!user){
            return res.status(404).json({error:"user not found"})
        }
        res.status(201).json({
            message: "The form is updateed succesfly",
            data:user
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const home=async(req,res)=>{
    try {
        const user=await UserData.find();
        res.status(200).json({
            message: "this are the data ",
            data:user
        })
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

module.exports={
    sendForm,
    home,
    updateForm
 
}