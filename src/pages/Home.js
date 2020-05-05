import React, {useEffect} from 'react';
import bg from '../assets/images/coderdojo.png';

const Home = (props) => {
    useEffect(() => {
        props.setPage('home');
    });

    return (
        <div className="home-body">
            <div className={'home-contents'}>
                <h1 className="home-head">HackSlash</h1>
                <h3 className="home-h3">
                    Student Developers' Club<br/>National Institute of Technology, Patna
                </h3>
                <h5 className="home-h5">
                    Come, be a part of the community<br/>and help contrive better software!
                    <br/>
                    <a href="/about" className="home-know-more">Know more</a>
                </h5>
            </div>
            <h3 className="home-p-world">
                In a world of technology,<br/>people make the difference.
            </h3>
            <img className="home-img" alt="bg" src={bg}/>
        </div>
    );
};

export default Home;