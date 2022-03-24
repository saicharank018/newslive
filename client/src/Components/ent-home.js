import React, { useEffect,useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'

/**
* @author
* @function Enthome
**/

const Ent = (props) => {
    let [ent,setEnt]=useState([])
    let history=useHistory()
    useEffect(()=>{
        fetch("https://reactnews3245.herokuapp.com/entertainment/home",{
            method:"get",
            headers:{
              "Content-Type":"application/json"
            }
          })
        .then((res)=>res.json())
        .then(res=>{
            console.log(res.data)
            setEnt(res.data)
            console.log(ent)
          })
        .catch(err=>{
            console.log(err)
          })
         
    },[])
  return(
    <div>
       <div className="container-fluid">
            <h5 style={{fontFamily: "'Noto Serif', serif",fontWeight:"bold",marginTop:"3%"}}>Entertainment</h5>
            <hr style={{margin:"0%"}} />
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            {
                  ent.map((item)=>(
                    <div className="col">               
                            <div onClick={()=>{history.push('/topics/entertainment/'+item._id)}} className="row row-latest">
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

export default Ent