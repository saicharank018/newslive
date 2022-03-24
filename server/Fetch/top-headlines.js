const mongoose=require("mongoose")
const top=mongoose.model("TOPHEADLINES")
const fetch=require("node-fetch")
setInterval((async ()=>{
    await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=ef82052321eb4fd884be08133b1b4911")
    .then(result=>result.json())
    .then(data=>{
        console.log("top-headlines")
        top.deleteMany({})
        .then(data=>{
            console.log("top-headlines deletion success")
        })
        .catch(err=>{
            console.log(err);
        })
         
        top.insertMany(data.articles);
       
            })
    .catch(err=>{
        console.log(err);
        
    })
}),1000000)