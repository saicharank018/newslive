const mongoose=require("mongoose");
const entSchema=new mongoose.Schema({
    source: {
        id: String,
        name: String
    },
    author:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
       
    },
    url:{
        type:String,
        required:true
    },
    urlToImage:{
        type:String,
      
    },
    publishedAt:{
        type:String,
        required:true
    },
    content:{
        type:String,
    }
})
mongoose.model("ENT",entSchema);