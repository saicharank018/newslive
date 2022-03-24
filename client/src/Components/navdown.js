import React from 'react'
import {Link} from "react-router-dom"

/**
* @author
* @function Navdown
**/

const Navdown = (props) => {
  return(
    <div>
        <div className="navid">
           <div className="indi" style={{"margin-left":"7%"}}>
                <ul>
                    <li>
                      <Link to="/">
                      Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/top-headlines">
                      Trending
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/entertainment">
                      Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/sports">
                      Sports
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/business">
                      Business
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/technology">
                      Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/topics/science">
                      Science
                      </Link>
                    </li>               
                </ul>
           </div>
        </div>
    </div>
   )

 }

export default Navdown