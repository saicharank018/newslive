import React, { useEffect, useState } from 'react'
import {Link,useHistory} from "react-router-dom"
/**
* @author
* @function Enthome
**/

const Spt = (props) => {
    let history=useHistory()
    let [sport,setSport]=useState([])
    useEffect(()=>{
        fetch("https://reactnews3245.herokuapp.com/sports/home",{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setSport(res.data)
        })
    },[])
    let data=sport.map((item)=>(
        <div className="col">
            
                <div onClick={()=>{history.push('/topics/sports/'+item._id)}} className="row row-latest">
                    <div className=" border-col col-lg-5 col-4">
                        <img className="topic-img img img-fluid img-thumbnail" src={item.urlToImage} alt="missing" />
                    </div>
                    <div className=" col-lg-7 col-8">
                        <h4 style={{fontSize:"16px"}}>{item.title}</h4>
                    </div>
                </div>
            
        </div>
       ))
  return(
    <div>
       <div className="container-fluid">
            <h5 style={{"font-family": "'Noto Serif', serif","font-weight":"bold","margin-top":"3%"}}>Sports</h5>
            <hr style={{"margin":"0%"}} />
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
               {
                  sport.map((item)=>(
                    <div className="col">               
                            <div onClick={()=>{history.push('/topics/sports/'+item._id)}} className="row row-latest">
                                <div className=" border-col col-lg-5 col-4">
                                    <img className="topic-img img img-fluid img-thumbnail" src={item.urlToImage} alt="missing" />
                                </div>
                                <div className=" col-lg-7 col-8">
                                    <h4 style={{fontSize:"16px"}}>{item.title}</h4>
                                </div>
                            </div>    
                    </div>
                        ))
               }
            </div>
        </div> 
    </div>
   )

 }

export default Spt