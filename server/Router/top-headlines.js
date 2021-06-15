const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const top=mongoose.model("TOPHEADLINES")
router.get('/top-headlines/home',(req,res)=>{
    top.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
router.get("/top-headlines",(req,res)=>{
    // console.log("top")
    top.find({})
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch((err)=>{
        return res.status(400).json({msg:"Something went Wrong"})
    })
})
module.exports=router