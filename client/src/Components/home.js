import React from 'react'
import Carousel from './carousel'
import Ent from './ent-home'
import Latest from './latest'
import Spt from './spt-home'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useHistory } from 'react-router'

/**
* @author
* @function Home
**/

const Home = (props) => {
    let history=useHistory();
  return(
    <div style={{"marginLeft":"4%","marginRight":"4%"}}>
        <div style={{"margin-top":"2%"}} className="row">
            <div onClick={()=>{history.push('/covid')}} style={{"margin-bottom":"2%",position:"relative"}} className="col-12 col-md-6 col-lg-5">
                <img className=" img-fuid home-img"style={{"width":"100%","height":"100%"}}src={process.env.PUBLIC_URL + '/covid19.jpg'}/>
                <div id="text-block">
                    <h4>Click here for Covid 19 Live Updates</h4>
                </div>
            
            </div>
            <div className="col-12 col-md-6 col-lg-7 ">
                <Latest/>
            </div>
        </div>
        <div>
            <Carousel/>
        </div>
        <div>
            <Ent/>
        </div>
        <div>
            <Spt/>
        </div>
        
    </div>
   )

 }

export default Home