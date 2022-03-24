import React,{useEffect} from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import {Link} from "react-router-dom"

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {  
  
  useEffect(()=> {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "right",
        inDuration: 250
    });
},[])
  return(   
  <div>
     <nav>
    <div className=" navi nav-wrapper">
      
      {/* <a href="#!" className="brand-logo" style={{"font-family": "'Pirata One', cursive","padding-left":"10px"}}>News Live</a>
      <img src="../public/logo.jpg" alt="hello" /> */}
      <div className="brand-logo">
        <img  style={{"width":"70px","padding-bottom":"8px"}} src="../logo.jpg" alt="hello" />
        <a href="#!" style={{"font-family": "'Pirata One', cursive","padding-left":"10px"}}>News Live</a>
      </div>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
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
                      <Link to="https://reactnews3245.herokuapp.com/topics/science">
                      Science
                      </Link>
                    </li>
  </ul>
  </div>
   )      
 }
export default Navbar