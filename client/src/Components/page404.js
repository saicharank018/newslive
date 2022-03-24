import React from 'react'
import { useHistory } from 'react-router'

/**
* @author
* @function PageNot
**/

const PageNot = (props) => {
    let history=useHistory()
  return(
      <div style={{backgroundColor:"pink",height:"800px"}}>
            <div >
                 <img  style={{marginLeft:"10%"}} className="img img-fluid" src={process.env.PUBLIC_URL + "/404.png"} />
            </div>
            <div>
                <button className=" btn btn-md btn-success btn-404" style={{marginLeft:"50%"}} onClick={()=>{history.push('/')}}>Go To Home</button>
            </div>
        </div>
   )

 }

export default PageNot