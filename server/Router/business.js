const express=require("express")
const router=express.Router();
const mongoose=require("mongoose");
const business=mongoose.model("BUSSINESS")
router.get('/business',(req,res)=>{
    business.find({})
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch(err=>{
        return res.status(401).json({msg:"some thing error occured"})
    })
   
})
router.get('/business/home',(req,res)=>{
    business.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch(err=>{
        return res.status(401).json({msg:"some thing error occured"})
    })
   
})
module.exports=router;