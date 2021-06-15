const mongoose=require("mongoose")
const scn=mongoose.model("SCIENCE")
const fetch=require("node-fetch")
setInterval((async ()=>{
        await fetch("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b1ad9994a50f4ea39a8d9e7b32f83d79")
        .then(result=>result.json())
        .then(data=>{
            console.log("science")
            scn.deleteMany({})
            .then(data=>{
                console.log("Science deletion success")
            })
            .catch(err=>{
                console.log(err);
            })
            // console.log(data.articles)
            scn.insertMany(data.articles);
           
                })
        .catch(err=>{
            console.log(err);
            
        })
    }),1800000)
    // 1800000