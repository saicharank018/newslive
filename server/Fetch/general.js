const mongoose=require("mongoose")
const gns=mongoose.model("GENERAL")
const fetch=require("node-fetch")
setInterval((async ()=>{
    await fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ca345a7f54e44ef89f360c8887becc08")
    .then(result=>result.json())
    .then(data=>{
        console.log("general")
        gns.deleteMany({})
        .then(data=>{
            console.log("general deletion success")
        })
        .catch(err=>{
            console.log(err);
        })
         
        gns.insertMany(data.articles);
       
            })
    .catch(err=>{
        console.log(err);
        
    })
}),1300000)