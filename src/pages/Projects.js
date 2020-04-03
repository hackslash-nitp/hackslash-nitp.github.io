import React from 'react';
import '../assets/scss/Projects.scss';
import top from '../assets/images/ProjectTop.jpg';
import search from '../assets/images/searchIcon.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return (
      <div>
        <div class="projects-head-div">
        <div class="projects-top-left-div">
        <img class="projects-img-top" src={top}/>
        </div>
        <div class="projects-top-right-div">
        <p class="projects-para-title">This is a test Project Title</p>
        <p class="projects-para-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
         purus sit amet luctus venenatis</p>
        <div class="projects-search-div">
          <div class="projects-search-left-div">
          <img class="projects-search-img" src={search}/>
          <hr/>
          </div>
          <div class="projects-search-right-div">
          <input type="text" placeholder="Search Projects" class="projects-search-text"/>
          <hr/>
          </div>
        </div>
        </div>
        </div>
        <div class="projects-hackslash-div">
          <p class="projects-hackslash-para">Hackslash Picks</p>
          <hr class="projects-hackslash-underline"/>
        </div>
        <div class="row projects-list-div">
          <div class="mb-3 projects-project-detail"></div>
          <div class="mb-3 projects-project-detail"></div>
          <div class="mb-3 projects-project-detail"></div>
        </div>
      </div>
);
};
export default Projects;