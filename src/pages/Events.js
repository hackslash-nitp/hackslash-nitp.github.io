import React from 'react';
import ReactDOM from "react-dom";


const Events = () => {
    var item = {location: "Patna", name: "Test", detail: "Detailed", time: "12PM"};
    return (
        <body class="events-body">
            <img class="float-left visible img-fluid" data-toggle="tooltip" data-bs-tooltip="" src="assets/img/events/events-bg-1.svg"/>
                <div>
                    <div class="row events-div">
                        <div class="col-md-6 col-xl-7 d-flex flex-column justify-content-center align-items-center">
                            <div class="row d-flex justify-content-center">
                                <div class="col-xl-12 offset-xl-1 d-flex">
                                    <h1 class="d-flex flex-grow-1 flex-shrink-1 justify-content-center align-items-center align-content-center align-self-center events-header">Ready to Join the Movement?</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-11">
                                    <h4 id="in" class="d-inline-flex align-content-center align-self-center img-fluid events-header-fourth">Check out What's Happening in the Campus</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4 offset-xl-1">
                            <img class="visible img-fluid events-img" src="assets/img/events/events-bg-2.svg"/>
                                </div>
                        </div>
                        <div class="row" style="margin-right: 0px;margin-left: 0px;"><div class="col">
                            <div class="row">
                                <div class="col-2 d-flex justify-content-end"><img class="img-fluid" src="assets/img/events/events-ic-search.svg"/>
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-5"><input class="form-control-plaintext events-input" type="text" placeholder="Search"/></div>
                                    </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row events-div-second">
      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h5 class="m-auto events-header-fifth">Upcoming</h5>
        <h5 class="m-auto events-header-fifth">Past</h5>
      </div>
      <div class="col">
        <hr/>
      </div>
    </div>
    <div class="row events-div-third">
      <img id="bg-4" class="img-fluid events-img-second" src="assets/img/events/events-bg-4.svg" />
      <img id="bg-3" class="img-fluid events-img-third" src="assets/img/events/events-bg-3.svg" />

      <div class="card border rounded shadow col-sm-6 col-lg-3 item events-div-card">
        <img class="card-img-top w-100 d-block"/>
        <div class="location events-location">
          <img src="assets/img/events/event-ic-location.svg" width="12px" height="12px"
               style="margin-right: 4px;margin-top: -2px;z-index:5;"/>
          item.location
        </div>
        <img class="img-fluid events-img-fluid" src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />

        <div class="card-body">
          <h4 class="card-title events-header-fifth">item.name</h4>
          <p class="card-text events-header-fifth">
            item.detail
          </p>

          <div class="location">
            <img src="assets/img/events/event-ic-time.svg" width="12px" height="12px"
                 class="events-img-location"/>
            item.time
          </div>

        </div>
      </div>
    </div>
  </div>
</body>
);
};
        export default Events;