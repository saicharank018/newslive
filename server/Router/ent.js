const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const ent=mongoose.model("ENT")
router.get('/entertainment',(req,res)=>{
    ent.find({})
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})
router.get('/entertainment/home',(req,res)=>{
    ent.find({}).limit(4)
    .then(data=>{
        return res.status(200).json({data})
    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({msg:"some thing error occured"})
    })
})

module.exports=router;