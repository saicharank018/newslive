import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Content from './content'

/**
* @author
* @function Latest
**/

const Latest = (props) => {
    let [top,setTop]=useState([])
    let dummy;
    let history=useHistory()
    useEffect(()=>{
        fetch("https://reactnews3245.herokuapp.com/top-headlines/home",{
            method:"get",
            headers:{
              "Content-Type":"application/json"
            }
          })
        .then((res)=>res.json())
        .then(res=>{
            console.log(res.data)
            dummy=res.data
            setTop(res.data)
            console.log(top)
          })
        .catch(err=>{
            console.log(err)
          })
         
    },[])
    
  return(
    <div className="container-fluid">
        <h5 style={{"font-family": "'Noto Serif', serif","font-weight":"bold","margin-top":"0%"}}>Latest</h5>
        <hr style={{"margin":"0%"}} />
        <div className="jumbotron" style={{"margin-bottom":"0%","padding":"0%"}}>
             <ul style={{marginTop:"0px"}}>
                {
                    top.map((item,i)=>(       
                        <li key={item._id} onClick={()=>{history.push('/topics/top-headlines/'+item._id)}}>
                            <div className="row row-latest">
                                <div className=" border-col col-lg-5 col-4">
                                    <img className="topic-img img img-fluid img-thumbnail" src={item.urlToImage}  width="20%" alt="missing" />
                                </div>
                                <div className=" col-lg-7 col-8">
                                    <h4 style={{fontSize:"15px"}}>{item.title}</h4>
                                </div>
                            </div>
                        </li>
                    ))
                   
                }

            </ul> 
            {/* <ul style={{"margin-top":"0px"}}>
                <li>
                <div className="row row-latest">
                <div className=" border-col col-lg-5 col-4">
                        <img className="topic-img img img-fluid img-thumbnail" src="https://images.news18.com/ibnlive/uploads/2021/01/1610863268_shardul.jpg" alt="missing" />
                    </div>
                    <div className=" col-lg-7 col-8">
                        <h4>gfjdgjhd</h4>
                    </div>
                    </div>
                </li>
                <li>
                <div className="row row-latest">
                <div className=" border-col col-lg-5 col-4">
                        <img className="topic-img img img-fluid img-thumbnail" src="https://images.news18.com/ibnlive/uploads/2021/01/1610863268_shardul.jpg" alt="missing" />
                    </div>
                    <div className=" col-lg-7 col-8">
                        <h4>gfjdgjhd</h4>
                    </div>
                </div>
                </li>
                <li>
                <div className="row row-latest">
                <div className=" border-col col-lg-5 col-4">
                        <img className="topic-img img img-fluid img-thumbnail" src="https://images.news18.com/ibnlive/uploads/2021/01/1610863268_shardul.jpg" alt="missing" />
                    </div>
                    <div className=" col-lg-7 col-8">
                        <h4>gfjdgjhd</h4>
                    </div>
                </div>
                </li>
               
            </ul> */}
        
        </div>
    </div>
   )

 }

export default Latest