import web from "../src/assets/img1.PNG";
import React from "react";
//import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";



const Home = () => {
    return (
   
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> <strong className="brand-name">Discover, collect,
                 and charity in
                  extraordinary NFT marketplace</strong></h1>
                <h2 className="my-3">
                In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis
                </h2>
                <button className="rounded-button">
      Explore
    </button>
    <button className="rounded-button">
      Create
    </button>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="download.img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        
  );
};

  export default Home;