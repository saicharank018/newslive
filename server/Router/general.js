const express=require("express")
const router=express.Router();
const mongoose=require("mongoose");
const gnl=mongoose.model("GENERAL")
router.get('/general',(req,res)=>{
    gnl.find({})
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch(err=>{
        return res.status(401).json({msg:"some thing error occured"})
    })
   
})
router.get('/general/home',(req,res)=>{
    gnl.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch(err=>{
        return res.status(401).json({msg:"some thing error occured"})
    })
   
})
module.exports=router;