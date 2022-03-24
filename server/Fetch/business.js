const mongoose=require("mongoose")
const bns=mongoose.model("BUSSINESS")
const fetch=require("node-fetch")
setInterval((async ()=>{
    await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aeed9ec3b63348bc85230cbd46ab324c")
    .then(result=>result.json())
    .then(data=>{
        console.log("business")
        bns.deleteMany({})
        .then(data=>{
            console.log("business deletion success")
        })
        .catch(err=>{
            console.log(err);
        })
        bns.insertMany(data.articles)
        .then((data)=>{
            console.log("insertion success")
        })
        
       
            })
    .catch(err=>{
        console.log(err);
        
    })
}),1800000)