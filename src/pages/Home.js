import React from 'react';
import bg from '../assets/images/coderdojo.png';

const Home = () => {
    return(
        <div className="row home-body" >
            <div className="col-xl-6 d-flex flex-column  align-self-center justify-content-xl-start">
                <h1 className="home-head">hackslash</h1>
                <h3 className="home-h3">
                    Student Developer Club<br />National Institute of Technology, Patna
                </h3>
                <h5 className="home-h5">
                    Come, be a part of the community<br />and help contrive better software.
                    <br />
                    <a href="about" className="home-know-more">Know more</a>
                </h5>
                <h3 className="home-p-world">
                    In a world of technology,<br />people make the difference.
                </h3>
            </div>
            <div className="col home-col">
                <img className="img-fluid home-img" alt="bg" src={bg} />
            </div>
        </div>
    );
};

export default Home;