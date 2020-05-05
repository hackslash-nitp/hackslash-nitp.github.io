import React, {useState} from 'react';
import {Router, Location} from "@reach/router";
import Home from './pages/Home.js';
import Hall from './pages/Hall.js';
import NavBar from './components/Nav.js';
import About from './pages/About.js';
import Join from "./pages/Join";
import posed, {PoseGroup} from 'react-pose';
import Certificates from "./pages/Certificates";

const RoutesContainer = posed.div({
    enter: {opacity: 1, delay: 0},
    exit: {opacity: 0}
});

const App = () => {
    const [page, setPage] = useState('');

    return (
        <div>
            <NavBar page={page}/>
            <PosedRouter>
                <Home path="/" setPage={setPage}/>
                <Hall path="/hall" setPage={setPage}/>
                <About path="/about" setPage={setPage}/>
                <Join path="/join" setPage={setPage}/>
                <Certificates path="/certi" setPage={setPage}/>
                {/*<Events path="/events"/>*/}
                {/*<Articles path="/articles"/>*/}
                {/*<Projects path="/projects"/>*/}
            </PosedRouter>
        </div>
    );
}

const PosedRouter = ({children}) => (
    <Location>
        {({location}) => (
            <PoseGroup>
                <RoutesContainer key={location.key}>
                    <Router location={location}>
                        {children}
                    </Router>
                </RoutesContainer>
            </PoseGroup>
        )}
    </Location>
);


export default App;
