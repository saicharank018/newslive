import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.js';
import Feed from "./Components/feed";
import Latest from './Components/latest';
import Navdown from './Components/navdown';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Carousel from './Components/carousel';
import Topics from './Components/topics';
import Home from './Components/home';
import CovidCases from "./Components/covid19"
import PageNot from './Components/page404';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Navdown/>
        <Switch>
          <Route exact path="/">
              <Home/> 
          </Route>  
          <Route exact path="/covid">
              <CovidCases/> 
          </Route>   
         
          <Route exact path="/topics/:id">
            <Topics/>
          </Route>
          <Route exact path="/topics/:id/:id2">
            <Feed/>
          </Route>
           <Route exact path="/feed" component={Feed} />
           {/* <Route exact path="/topics/:id/:fin"> */}
              {/* <Feed/> 
          </Route> */}
          <Route>
            <PageNot/>
          </Route>
        </Switch>
        </BrowserRouter>   
    </div>
  );
}

export default App;
