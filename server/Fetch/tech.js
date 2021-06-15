const mongoose=require("mongoose")
const tech=mongoose.model("TECH")
const fetch=require("node-fetch")
setInterval((async ()=>{
        await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b1ad9994a50f4ea39a8d9e7b32f83d79")
        .then(result=>result.json())
        .then(data=>{
            console.log("technology")
            tech.deleteMany({})
            .then(data=>{
                console.log("technology deletion success")
            })
            .catch(err=>{
                console.log(err);
            })
            // console.log(data.articles)
            tech.insertMany(data.articles);
           
                })
        .catch(err=>{
            console.log(err);
            
        })
    }),1750000)