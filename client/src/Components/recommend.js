import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router';

/**
* @author
* @function Recommend
**/

const Recommend = (props) => {
    let [re,setRe]=useState([])
    let id=props.id;
    let history=useHistory()
    useEffect(()=>{
        fetch("https://reactnews3245.herokuapp.com/"+id+"/home",{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setRe(res.data)
            console.log("ent/home")
            console.log(re)
        })
    },[])
  return(
    <div className="container">
        <h5 style={{fontWeight:" bold"}}>Recommended</h5>
        <hr/>
        <div className="jumbotron " style={{border:"2px solid black"}}>
            <ul style={{marginTop:"0px",marginBottom:"0%"}}>
                {
                    re.map((item,i)=>(
                        <li  onClick={()=>{history.push('/topics/'+id+'/'+item._id)}}className="border-bottom" style={{"padding":"4px",fontFamily: "'Roboto Condensed', sans-serif"}}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    </div>
   )

 }

export default Recommend