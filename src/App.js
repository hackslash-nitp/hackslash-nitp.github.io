import React from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home.js';
import Events from './pages/Events.js';
import Hall from './pages/Home.js';
import Articles from './pages/Home.js';
import NavBar from './components/Nav.js';
import About from './pages/About.js';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Home path="/" />
        <Events path="/events" />
        <Hall path="/hall" />
        <Articles path="/articles" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
