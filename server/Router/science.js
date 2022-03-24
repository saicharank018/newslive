const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const science=mongoose.model("SCIENCE")
router.get('/science',(req,res)=>{
    science.find({})
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
router.get('/science/home',(req,res)=>{
    science.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
module.exports=router;