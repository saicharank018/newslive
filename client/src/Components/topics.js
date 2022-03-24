import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from "react-router-dom"
import Content from './content';
import ClipLoader from "react-spinners/ClipLoader";
import  M from "materialize-css"


/**
* @author
* @function Topics
**/

const Topics = (props) => {
    var length=0
    let {id}=useParams();
    let [fdata,setData]=useState([])
    
    let [loader,setLoader]=useState(true);
    let dummy;
    let history=useHistory()
    useEffect(()=>{
        setLoader(true)
        fetch("https://reactnews3245.herokuapp.com/"+id,{
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
            console.log(res);
            console.log(res.data)
            dummy=res.data
            setData(dummy)
            setLoader(false)
            console.log(fdata)
            }
          })
        .catch(err=>{
            console.log(err)
            setLoader(false)
          })
    },[id])
     let datalist=fdata.map((item)=><Content val={item} id={id}/>)
    
    
  return(
    <div>
        {/* <div className="row" style={{"margin-top":"0px" ,"margin-right":"0px","background-color":"#f2f2f2","height":"365px"}}>
            <div className="col-lg-5 col-md -7 offset-lg-2 col-7"  style={{"padding-left":"0px","padding-right":"0px"}}>
                <img src="https://timesofindia.indiatimes.com/photo/80224562.cms" className="img img-fluid" style={{"width":"100%","height":"365px"}} />
                <div className="carousel-caption">
                    <h4>Aussie skipper Tim Paine apologises for sledging Ravi Ashwin</h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-5 col-5" style={{"padding-left":"0px","padding-right":"0px"}}>
                <div>
                    <img src="https://timesofindia.indiatimes.com/photo/80224562.cms" className="img img-fluid" style={{"width":"100%","height":"182px"}} />
                    <div className="top-right">Centered</div>
                   
                </div>
                <div>
                    <img src="https://timesofindia.indiatimes.com/photo/80224562.cms" className="img img-fluid" style={{"width":"100%","height":"182px"}} />
                    <div className="carousel-caption">
                        <h4>Aussie skipper Tim Paine apologises for sledging Ravi Ashwin</h4>
                    </div>
                </div>
            </div>
        </div> */}
        {/* two column starts */}
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2" style={{"margin-top":"3%","margin-left":"1%"}} >
            {loader?
            <div style={{marginLeft:"45%",marginTop:"12%"}}
            ><ClipLoader color={"blue"} loading={true}  size={30} /> 
                <p>Loading...</p>
            </div>
            : datalist}
            {/* {datalist} */}
        </div>
    </div>
   )

 }

export default Topics