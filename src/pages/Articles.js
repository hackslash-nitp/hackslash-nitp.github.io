import React from 'react';
import ReactDOM from "react-dom";


const Articles = () => {
    return (
        <body class="articles-body">
            <div>
                <div class="row articles-main-div">
                    <div class="col-md-4 col-lg-4 col-xl-4 offset-xl-1 articles-sub-div"><img class="visible img-fluid articles-img" src="assets/img/background2.svg"/></div>
                        <div class="col-md-6 col-xl-7 d-flex flex-column justify-content-center">
                            <div class="row d-flex justify-content-center">
                                <div class="col-xl-12 offset-xl-1 d-flex">
                                    <div class="row d-flex justify-content-center align-content-center">
                                        <div class="col d-inline-flex">
                                            <h1 class="articles-header">YOURS</h1>
                                        </div>
                                        <div class="col d-inline-flex align-self-center">
                                            <h3 class="articles-header-second">FOR INSPIRATION</h3></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-11">
                                    <h6 class="d-inline-flex align-content-center align-self-center img-fluid articles-header-third">
                                        <strong>Hackslash is a student developers' community powered by Mozilla Campus Clubs Network that focuses&nbsp;fundamentally on software development. Hackslash subsists on the belief that everyone can create &amp; innovate.
                                            </strong><br/>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row articles-main-div">
                            <div class="col">
                                <div class="row">
                                    <div class="col-2 d-flex justify-content-end">
                                        <img class="img-fluid" src="assets/img/events/events-ic-search.svg"/>
                                    </div>
                                        <div class="col">
                                            <input class="form-control-plaintext articles-input" type="text" placeholder="Search"/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row articles-div-second">
    <div class="col-12 col-md-4 col-xl-2 d-flex" id="upcom">
      <h5 class="m-auto articles-header">Recent</h5>
      <h5 class="m-auto articles-header">All</h5>
    </div>
    <div class="col">
      <hr/>
    </div>
  </div>
</div>
<div class="card border rounded shadow articles-div-third">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
    <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a class="card-link" href="#">Link</a><a class="card-link" href="#">Link</a>
  </div>
</div>
</body>
);
};

export default Articles;