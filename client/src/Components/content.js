import React, { useState } from 'react'
import Feed from './feed';
import {Link, useParams} from "react-router-dom"

/**
* @author
* @function Content
**/

const Content = (props) => {
    const item=props.val;
    const id=props.id;
    // const [items,setItems]=useState({})
  return(
    <div className="col">
            
        <div className="row border" >   
                {/* border-col class is to remove padding that comes default with the col classes      */}
          
            <div className=" border-col col-lg-5 col-3">
                <img className="topic-img img img-fluid img-thumbnail" src={item.urlToImage} alt="missing" />
            </div>
            <div className=" col-lg-7 col-9">
                <Link to={{pathname:'/topics/'+id+'/'+item._id}} >
                  {/* <Link to={{pathname:'/topics/'+id+'/'+item.title,
            vals:item}} > */}
                  <h4 class="content-link">{item.title }</h4>
                </Link>
                
            </div>
        </div>
    </div>
   )

 }

export default Content