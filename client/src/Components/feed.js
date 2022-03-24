import React, { useEffect, useState } from "react"
import {Link, useHistory, useParams} from "react-router-dom"
import Latest from './latest';
import Recommend from "./recommend";
import ClipLoader from "react-spinners/ClipLoader";
import  M from "materialize-css"

const Feed=(props)=>{
    let [item,setItem]=useState({})
    let history=useHistory()
    // const item=props.location.vals.items;
    // const description1= item.description.replace(/(<([^>]+)>)/gi, "");
    // // const description2= description1.replace(/&#x27;/gi, "'");
    // String.prototype.allReplace = function(obj) {
    //     var retStr = this;
    //     for (var x in obj) {
    //         retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    //     }
    //     return retStr;
    // };
    // const description=description1.allReplace({"&#x27;":"'","&quot;":"'"})
    let {id,id2}=useParams()
    let [loader,setLoader]=useState(true)
    useEffect(()=>{
        setLoader(true)
        console.log(id,id2)
        fetch("https://reactnews3245.herokuapp.com"+"/"+id+"/"+id2,{
            method:"get",
            headers:{
              "Content-Type":"application/json"
            }
          })
        .then((res)=>res.json())
        .then(res=>{
            if(res.msg){
                M.toast({html:res.msg,classes:"card-panel teal lighten-2"})
                setLoader(false)
                history.push('/')
            }
            else{
                setItem(res.data)
                setLoader(false)
            }
           
          })
        .catch(err=>{
            console.log(err)
          })
       
            
    },[id,id2])
return(
    <div className="row" >
        {loader?
            <div style={{marginLeft:"45%",marginTop:"12%"}}
            ><ClipLoader color={"blue"} loading={true}  size={30} /> 
                <p>Loading...</p>
            </div>
            : 
        <div className="col-sm-11 col-md-11 col-lg-7" >
           
           <div className="feed-title">
               <h2 style={{"font-family": "'Noto Serif', serif"}}>
                   {item.title}
               </h2>
           </div>
           
           <div className="h5" style={{"margin-left":"6%","padding-bottom":"3px"}}>
               <a>Published : </a>
               <a>{item.publishedAt}</a>
           </div>
           
           <div >
               <img className=" feed-img  img-fluid" src={item.urlToImage} alt="missing"  style={{"width":"700px"}} />
           </div>
             
           <div>
               <p className="feed-description" style={{"margin":"5% 1% 2% 6%"}}>{item.description}</p>
           </div>
             
           <div style={{marginLeft:"40%"}}>
                   <button type="button" className="btn btn-outline-info" onClick={()=>{window.open(item.url,"_blank")}}>Read more</button>            
           </div>
       </div>  
        }
        <div className="col-lg-3 rec" style={{"margin-top":"6%","margin-left":"75px"}}>
            {
                <Recommend id={id} />
            }    
        </div>    
    </div>
    )
}
export default Feed