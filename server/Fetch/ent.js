const mongoose=require("mongoose")
const ent=mongoose.model("ENT")
const fetch=require("node-fetch")
setInterval((async ()=>{
        await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ca345a7f54e44ef89f360c8887becc08")
        .then(result=>result.json())
        .then(data=>{
            console.log("ent")
            ent.deleteMany({})
            .then(data=>{
                console.log("Ent deletion success")
            })
            .catch(err=>{
                console.log(err);
            })
            // console.log(data.articles)
            ent.insertMany(data.articles);
           
                })
        .catch(err=>{
            console.log(err);
            
        })
    }),1600000)