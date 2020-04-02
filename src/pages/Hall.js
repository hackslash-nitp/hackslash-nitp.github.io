import React from 'react';

const Hall = () => {
    return (
        <div class="hall-body">
<div class="hall-sub">
  <div>
    <div class="row d-flex">
      <div class="col-md-4 col-lg-4 col-xl-4 offset-xl-1 hall-div"><img class="visible img-fluid hall-img" src="assets/img/hall/hall-bg-1.svg"/></div>
      <div class="col-md-6 col-xl-7 d-flex flex-column justify-content-center">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-12 offset-xl-1 d-flex hall-div-second">
            <h1 class="d-flex flex-grow-1 flex-shrink-1 align-items-center align-content-center align-self-center hall-header">The Illuminatis</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-11">
            <h3 class="d-inline-flex align-content-center align-self-center img-fluid hall-header-second"><strong>Learning,Inspiring &amp; Growing Together</strong><br/></h3>
          </div>
        </div>
      </div>
      <div class="col">
        <img src="assets/img/hall/hall-bg-2.svg" id="bg2" class="hall-img-second"/>
      </div>
    </div>
  </div>
  <div>
    <div class="row d-flex justify-content-center hall-div-third">
      <img id="bg-4" class="img-fluid hall-img-third" src="assets/img/hall/hall-bg-4.svg" />
      <img id="bg-3" class="img-fluid hall-img-fourth" src="assets/img/hall/hall-bg-3.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto hall-header-third" id="head">Leads</h4>
      </div>
      <div class="col-xl-10 hall-div-fourth">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center hall-div-fifth">
        <div class="border rounded shadow hall-div-sixth">
          <img class="card-img-top d-block hall-img-fifth"/>
          <div class="card-body hall-div-seventh">
            <div class="hall-div-eighth">
              <h3 class="card-title d-flex justify-content-center hall-header">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center hall-img-sixth"
                   src="{{item.image}}"
                   />
            </div>

            <div class="hall-div-ninth">
              <p class="card-text d-flex justify-content-center hall-p">
                item.bio
              </p>
              <div class="location hall-div-tenth">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div>
    <div class="row d-flex justify-content-center hall-div-eleventh">
      <img id="bg-3" class="img-fluid hall-img-eighth" src="assets/img/hall/hall-bg-5.svg" />
      <img id="bg-6" class="img-fluid hall-img-ninth" src="assets/img/hall/hall-bg-6.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto hall-header-third" id="dev">Designers</h4>
      </div>
      <div class="col-xl-10 hall-div-fourth">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center hall-div-fifth">
        <div class="border rounded shadow hall-div-sixth">
          <img class="card-img-top d-block hall-img-fifth"/>
          <div class="card-body hall-div-seventh">
            <div class="hall-div-eighth">
              <h3 class="card-title d-flex justify-content-center hall-header">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center hall-img-sixth"
                   src="{{item.image}}"
                   />
            </div>

            <div class="hall-div-ninth">
              <p class="card-text d-flex justify-content-center hall-p">
                item.bio
              </p>
              <div class="location hall-div-tenth">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div class="hall-div-twelth">
    <div class="row d-flex justify-content-center hall-div-eleventh">
      <img id="bg-7" class="img-fluid hall-img-tenth" src="assets/img/hall/hall-bg-7.svg" />
      <img id="bg-8" class="img-fluid hall-img-eleventh" src="assets/img/hall/hall-bg-8.svg" />

      <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
        <h4 class="m-auto hall-header-third" id="dev">Developers</h4>
      </div>
      <div class="col-xl-10 hall-div-fourth">
        <hr/>
      </div>
    </div>
    <div class="row d-flex justify-content-center hall-div-thirteenth">
      <div class=" col-sm-6 col-lg-3 item d-flex justify-content-center hall-div-fifth">
        <div class="border rounded shadow hall-div-sixth">
          <img class="card-img-top d-block hall-img-fifth"/>
          <div class="card-body hall-div-seventh">
            <div class="hall-div-eighth">
              <h3 class="card-title d-flex justify-content-center hall-header">item.name</h3>
            </div>
            <div class=" d-flex justify-content-center">
              <img class="img-fluid d-flex justify-content-center hall-img-sixth"
                   src="{{item.image}}"
                   />
            </div>

            <div class="hall-div-ninth">
              <p class="card-text d-flex justify-content-center hall-p">
                item.bio
              </p>
              <div class="location hall-div-tenth">
                <a href="{{item.linkedin}}">
                  <img src="assets/img/about_us/card-link-linkedin.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.github}}">
                  <img src="assets/img/about_us/card-link-github.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a><a href="{{item.medium}}">
                  <img src="assets/img/about_us/card-link-medium.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dev}}">
                  <img src="assets/img/about_us/card-link-dev.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
                </a>
                <a href="{{item.dribble}}">
                  <img src="assets/img/about_us/card-link-dribble.svg" width="50px" height="50px"
                       class="hall-img-seventh"/>
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