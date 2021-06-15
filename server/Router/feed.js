const express=require("express")
const router=express.Router();
const mongoose=require("mongoose")
const sports=mongoose.model("SPORTS")
const ent=mongoose.model("ENT")
const tech=mongoose.model("TECH")
const scn=mongoose.model("SCIENCE")
const bsn=mongoose.model("BUSSINESS")
const top=mongoose.model("TOPHEADLINES")
const gns=mongoose.model("GENERAL")
router.get('/:id1/:id2',(req,res)=>{
    console.log(req.params)
    let id1=req.params.id1;
    let id2=req.params.id2;
    if(id1=="sports"){
        sports.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="business"){
        bsn.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="science"){
        scn.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="technology"){
        tech.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="entertainment"){
        ent.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="top-headlines"){
        top.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else if(id1=="general"){
        gns.findOne({_id:id2})
            .then(data=>{
                return res.status(200).json({data})
            })
            .catch(err=>{
                return res.status(400).json({msg:"error occured"})
            })
    }
    else{
        return res.status(400).json({msg:"error occured"});
    }
    
})
module.exports=router