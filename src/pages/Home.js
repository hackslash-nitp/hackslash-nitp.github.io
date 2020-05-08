import React, {useEffect} from 'react';
import bg from '../assets/images/coderdojo.png';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "@reach/router";

const Home = (props) => {
    useEffect(() => {
        props.setPage('home');
    });

    return (
        <Container className="home-body" fluid={true}>
            <Row className={'home-main-row'} style={{justifyContent: 'flex-end'}}>
                <Col xl={6} lg={12} md={12} className={'home-main-col'}>
                    <h1 className="home-head">HackSlash</h1>
                    <h3 className="home-h3">
                        Student Developers' Club<br/>National Institute of Technology, Patna
                    </h3>
                    <h5 className="home-h5">
                        Come, be a part of the community{'\n'}and help contrive better software!{'\n'}
                    </h5>
                    <Link to="/about" className="home-know-more">Know more</Link>
                    <p className="home-p-world">
                        In a world of technology, {'\n'}people make the difference.
                    </p>
                </Col>
                <Col xl={6} lg={12} md={12} style={{alignSelf: 'flex-end'}}>
                    <img className="home-img" alt="bg" src={bg}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;