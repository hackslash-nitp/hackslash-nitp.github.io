import React from 'react';

const Home = () => {
    return(
        <div class="row home-body" >
            <div class="col-xl-6 d-flex flex-column  align-self-center justify-content-xl-start">
                <h1 class="home-head">hackslash</h1>
                <h3 class="home-h3">
                    Student Developer Club<br />National Institute of Technology, Patna
                </h3>
                <h5 class="home-h5">
                    Come, be a part of the community<br />and help contrive better software.
                    <br />
                    <a href="about" class="home-know-more">Know more</a>
                </h5>
                <h3 class="home-p-world">
                    In a world of technology,<br />people make the difference.
                </h3>
            </div>
            <div class="col home-col">
                <img class="img-fluid home-img" alt="bg" src="assets/coderdojo.png" />
            </div>
        </div>
    );
};

export default Home;