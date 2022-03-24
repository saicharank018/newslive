const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
require("dotenv").config()
// Et4ExPHADoEw8tf1
app.use(cors())
var MONGOURI="mongodb+srv://saicharan:Et4ExPHADoEw8tf1@cluster0.watyb.mongodb.net/<dbname>?retryWrites=true&w=majority"

//mongodb+srv://sai:<password>@cluster0.watyb.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("connected",()=>{console.log("connected")})
.catch(err=>{
    console.log(err);
})
mongoose.connection.on("error",()=>{console.log("error")})
.catch(err=>{
    console.log(err)
})

require("./models/sports.js")
require("./models/ent.js")
require("./models/business.js")
require("./models/science.js")
require("./models/technology.js")
require("./models/general.js")
require("./models/top-headlines.js")

require("./Fetch/sports.js")
require("./Fetch/ent.js")
require("./Fetch/business.js")
require("./Fetch/science.js")
require("./Fetch/tech.js")
require("./Fetch/general.js")
require("./Fetch/top-headlines.js")

app.use(require("./Router/sports.js"))
app.use(require("./Router/ent.js"))
app.use(require("./Router/business.js"))
app.use(require("./Router/science.js"))
app.use(require("./Router/tech.js"))
app.use(require("./Router/top-headlines.js"))
app.use(require("./Router/general.js"))
app.use(require("./Router/feed.js"))

// app.get("/",(req,res)=>{
//     return res.status("200").json({msg:"hii"})
// })
app.listen(process.env.PORT || 5000,()=>{
    console.log("server started");
})
