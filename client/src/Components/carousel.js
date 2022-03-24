import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link, useHistory } from 'react-router-dom'


/**
* @author
* @function Carousel
**/

const Carous = (props) => {
  let [val,setVal]=useState([])
  let history=useHistory()
  useEffect(()=>{
  fetch("https://reactnews3245.herokuapp.com/general/home",{
    method:"get",
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(res=>res.json())
  .then(result=>{
    setVal(result.data)
    console.log(result.data)
  })
  .catch(err=>{
    console.log(err)
  })
  },[])
  return(
    <div className="caro" >
        <Carousel autoPlay showThumbs={false}>
          {
            val.map((item,i)=>(
            <div onClick={()=>{history.push("/topics/general/"+item._id)}}>
              <img alt="" src={item.urlToImage} />
              <p className="legend" style={{color:"white"}}>{item.title}</p>
            </div>
            ))
          }
        
       
        </Carousel>
    </div>
   )

 }

export default Carous