const mongoose=require("mongoose")
const sports=mongoose.model("SPORTS")
const fetch=require("node-fetch")
setInterval((async ()=>{
        await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ca345a7f54e44ef89f360c8887becc08")
        .then(result=>result.json())
        .then(data=>{
            console.log("sports")
            sports.deleteMany({})
            .then(data=>{
                console.log("sports deletion success")
            })
            .catch(err=>{
                console.log(err);
            })
            // console.log(data.articles)
            sports.insertMany(data.articles);
           
                })
        .catch(err=>{
            console.log(err);
            
        })
    }),1890000)