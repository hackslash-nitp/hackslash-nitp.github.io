import React from 'react';

const Hall = () => {
    return (
        <div class="hall-body">
<div class="hall-sub">
  <div>
    <div class="row d-flex">
      <div class="col-md-4 col-lg-4 col-xl-4 offset-xl-1" style="margin: 26px;margin-left: 0px;"><img class="visible img-fluid" src="assets/img/hall/hall-bg-1.svg" style="margin: 0px;margin-top: 0px;"/></div>
      <div class="col-md-6 col-xl-7 d-flex flex-column justify-content-center">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-12 offset-xl-1 d-flex" style="margin-left: 0px;">
            <h1 class="d-flex flex-grow-1 flex-shrink-1 align-items-center align-content-center align-self-center" style=" font-family: GT Walsheim Pro;">The Illuminatis</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-11">
            <h3 class="d-inline-flex align-content-center align-self-center img-fluid" style="font-family: GT Walsheim Pro;color: rgb(71,130,188);"><strong>Learning,Inspiring &amp; Growing Together</strong><br/></h3>
          </div>
        </div>
      </div>
      <div class="col">
        <img src="assets/img/hall/hall-bg-2.svg" id="bg2" style="  position: absolute;
    max-width: 80%;margin-left:15px;
"/>
      </div>
    </div>
  </div>
  <div>
    <div class="row d-flex justify-content-center" style="margin-top: 87px;margin-left:0px;margin-right:0px;">
      <img id="bg-4" class="img-fluid" style="position:absolute;float:right;right:0" src="assets/img/hall/hall-bg-4.svg" />
      <img id="bg-3" class="img-fluid" style="position:absolute;float:left;left:0%;height:200%" src="assets/img/hall/hall-bg-3.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto" id="head" style="font-family: GT Walsheim Pro;display:flex;justify-content:center;">Leads</h4>
      </div>
      <div class="col-xl-10" style="padding-top:1%">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center" style="margin-left:0px;margin-right:0px;margin-top:40px;">
        <div class="border rounded shadow" style="height: 400px;
    width: 280px;margin-left:0px;margin-right:0px;">
          <img class="card-img-top d-block" style="background-color:white;width:200px;"/>
          <div class="card-body" style="margin-left: 0px; margin-right: 0px; margin-top: -20px; width: 280px;">
            <div style="background-color:white;position:absolute;width:280px;height:38%;margin-left:-20px;">
              <h3 class="card-title d-flex justify-content-center" style="font-family: GT Walsheim Pro;">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center" style="    display: block;
    border-radius: 200px;
    box-sizing: border-box;
    z-index: 5;
    margin-left: 10px;
    border: 5px solid;
    background-color: white;
    width: 120px;
    margin-top: 100px;
  "
                   src="{{item.image}}"
                   />
            </div>

            <div style="    margin-top: 20px;
">
              <p class="card-text d-flex justify-content-center" style="color:white">
                item.bio
              </p>
              <div class="location" style="display:flex;justify-content:center">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div>
    <div class="row d-flex justify-content-center" style="margin-top: 87px;margin-left:0px;margin-right:0px;">
      <img id="bg-3" class="img-fluid" style="position:absolute;float:right;right:0;height:100%;margin-top:10%" src="assets/img/hall/hall-bg-5.svg" />
      <img id="bg-6" class="img-fluid" style="position:absolute;float:left;left:0;width:40%;margin-top:20%" src="assets/img/hall/hall-bg-6.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto" id="dev" style="font-family: GT Walsheim Pro;display:flex;justify-content:center;">Designers</h4>
      </div>
      <div class="col-xl-10" style="padding-top:1%">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center" style="margin-left:0px;margin-right:0px;margin-top:40px;">
        <div class="border rounded shadow" style="height: 400px;
    width: 280px;margin-left:0px;margin-right:0px;">
          <img class="card-img-top d-block" style="background-color:white;width:200px;"/>
          <div class="card-body" style="margin-left: 0px; margin-right: 0px; margin-top: -20px; width: 280px;">
            <div style="background-color:white;position:absolute;width:280px;height:38%;margin-left:-20px;">
              <h3 class="card-title d-flex justify-content-center" style="font-family: GT Walsheim Pro;">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center" style="    display: block;
    border-radius: 200px;
    box-sizing: border-box;
    z-index: 5;
    margin-left: 10px;
    border: 5px solid;
    background-color: white;
    width: 120px;
    margin-top: 100px;
  "
                   src="{{item.image}}"
                   />
            </div>

            <div style="    margin-top: 20px;
">
              <p class="card-text d-flex justify-content-center" style="color:white">
                item.bio
              </p>
              <div class="location" style="display:flex;justify-content:center">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div style="width:100hw">
    <div class="row d-flex justify-content-center" style="margin-top: 87px;margin-left:0px;margin-right:0px;">
      <img id="bg-7" class="img-fluid" style="position:absolute;float:right;right:0;height:70%;margin-top:10%" src="assets/img/hall/hall-bg-7.svg" />
      <img id="bg-8" class="img-fluid" style="position:absolute;float:left;left:0;height:50%;margin-top:30%" src="assets/img/hall/hall-bg-8.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto" id="dev" style="font-family: GT Walsheim Pro;display:flex;justify-content:center;">Developers</h4>
      </div>
      <div class="col-xl-10" style="padding-top:1%">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center" style="margin-left:0px;margin-right:0px;">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center" style="margin-left:0px;margin-right:0px;margin-top:40px;">
        <div class="border rounded shadow" style="height: 400px;
    width: 280px;margin-left:0px;margin-right:0px;">
          <img class="card-img-top d-block" style="background-color:white;width:200px;"/>
          <div class="card-body" style="margin-left: 0px; margin-right: 0px; margin-top: -20px; width: 280px;">
            <div style="background-color:white;position:absolute;width:280px;height:38%;margin-left:-20px;">
              <h3 class="card-title d-flex justify-content-center" style="font-family: GT Walsheim Pro;">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center" style="    display: block;
    border-radius: 200px;
    box-sizing: border-box;
    z-index: 5;
    margin-left: 10px;
    border: 5px solid;
    background-color: white;
    width: 120px;
    margin-top: 100px;
  "
                   src="{{item.image}}"
                   />
            </div>

            <div style="    margin-top: 20px;
">
              <p class="card-text d-flex justify-content-center" style="color:white">
                item.bio
              </p>
              <div class="location" style="display:flex;justify-content:center">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       style="margin-right: 4px;margin-top: -2px;"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
            </div>
        </div>
);
};

export default Hall;