import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Navbar";
import { Switch,Route,Redirect } from "react-router-dom";
import Home from "./Home";
import Auctions from "./Auctions";
import Discover from "./Discover";
import Footer from "./footer";






function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <Auctions/>
    <Discover/>
    <Footer />
    
  {/* <Switch>
    <Route exact path="/" component={Home} />
 
    <Redirect to="/"/>
  </Switch> */}
    </>
      
  );
}

export default App;
