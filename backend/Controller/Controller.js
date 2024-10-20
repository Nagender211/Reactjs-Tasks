const sendForm=(req,res)=>{
    res.send("this the send form request")

}

const home=(req,res)=>{
    res.send("this is the home page nagender")
}

module.exports={
    sendForm,
    home
 
}