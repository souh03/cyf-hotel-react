import React from "react";

const TouristInfoCards = () => {
    return (
      <div className="App-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img  alt=""
                  src={
                    "https://media.traveler.es/photos/613771b1bae07f0d8a493714/master/w_1600,c_limit/126044.jpg"
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <a
                   
                    href="https://peoplemakeglasgow.com"
                    className="btn btn-primary"
                  >
                    Glasgow
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img alt=""
                  src={
                    "https://a.cdn-hotels.com/gdcs/production106/d980/dfbdfe50-5862-11e8-b0ec-0242ac11000c.jpg"
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <a
                    
                    href="https://visitmanchester.com"
                    className="btn btn-primary"
                  >
                    Manchester
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img  alt=""
                  src={
                    "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <a
                    
                    href="https://visitlondon.com"
                    className="btn btn-primary"
                  >
                    London
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TouristInfoCards;