const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const tech=mongoose.model("TECH")
router.get('/technology',(req,res)=>{
    tech.find({})
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
router.get('/technology/home',(req,res)=>{
    tech.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
module.exports=router;