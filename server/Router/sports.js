const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const sports=mongoose.model("SPORTS")
router.get('/sports',(req,res)=>{
    sports.find({})
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
router.get('/sports/home',(req,res)=>{
    sports.find({}).limit(5)
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
module.exports=router;