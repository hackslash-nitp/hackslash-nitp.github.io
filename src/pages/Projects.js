import React from 'react';
import '../assets/scss/Projects.scss';
import top from '../assets/images/ProjectTop.jpg';
import search from '../assets/images/searchIcon.jpg';
import fork from '../assets/images/Projects/fork.svg';
import star from '../assets/images/Projects/star.svg';
import language from '../assets/images/Projects/Language.svg';
import sideVector from '../assets/images/Projects/sideVector.jpg';
import sideUnderVec from '../assets/images/Projects/sideUnderVec.svg';
import rightVector from '../assets/images/Projects/rightVector.svg';
import bottomLeft from '../assets/images/Projects/bottomLeft.svg';
import bottomRight from '../assets/images/Projects/bottomRight.svg';
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
          <img class="projects-left-side-vec" src={sideVector}/>
          <img class="projects-left-side-under-vec" src={sideUnderVec}/>
          <img class="projects-right-side-vec" src={rightVector}/>
          <div class="mb-3 projects-project-detail">
            <div class="projects-image-div">
              <img class="projects-image" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"/>
            </div>
            <div class="projects-starfork-div">
              <div class="projects-star-div">
                <div class="projects-star-image-div">
                  <img src={star}/>
                </div>
                <div class="projects-star-text-div"><p class="projects-star-text">Star | 49</p></div>
              </div>
              <div class="projects-fork-div">
                <div class="projects-fork-image-div">
                  <img src={fork}/>
                </div>
                <div class="projects-fork-text-div"><p class="projects-fork-text">| 39</p></div>
              </div>
            </div>
            <div class="projects-text-section">
              <div class="projects-heading-text-div">
                <p class="projects-heading-text">Eleifend quis auctor nulla elit molestie.</p>
              </div>
              <div class="projects-description-text-div">
                <p class="projects-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="row projects-tags-div">
              <div class="mb-3"><img class="projects-language-image" src={language}/></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>CSS</p></div></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>REACT</p></div></div>
            </div>
          </div>
          <div class="mb-3 projects-project-detail">
          <div class="projects-image-div">
              <img class="projects-image" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"/>
            </div>
            <div class="projects-starfork-div">
              <div class="projects-star-div">
                <div class="projects-star-image-div">
                  <img src={star}/>
                </div>
                <div class="projects-star-text-div"><p class="projects-star-text">Star | 49</p></div>
              </div>
              <div class="projects-fork-div">
                <div class="projects-fork-image-div">
                  <img src={fork}/>
                </div>
                <div class="projects-fork-text-div"><p class="projects-fork-text">| 39</p></div>
              </div>
            </div>
            <div class="projects-text-section">
              <div class="projects-heading-text-div">
                <p class="projects-heading-text">Eleifend quis auctor nulla elit molestie.</p>
              </div>
              <div class="projects-description-text-div">
                <p class="projects-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="row projects-tags-div">
              <div class="mb-3"><img class="projects-language-image" src={language}/></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>CSS</p></div></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>REACT</p></div></div>
            </div>
          </div>
          <div class="mb-3 projects-project-detail">
          <div class="projects-image-div">
              <img class="projects-image" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"/>
            </div>
            <div class="projects-starfork-div">
              <div class="projects-star-div">
                <div class="projects-star-image-div">
                  <img src={star}/>
                </div>
                <div class="projects-star-text-div"><p class="projects-star-text">Star | 49</p></div>
              </div>
              <div class="projects-fork-div">
                <div class="projects-fork-image-div">
                  <img src={fork}/>
                </div>
                <div class="projects-fork-text-div"><p class="projects-fork-text">| 39</p></div>
              </div>
            </div>
            <div class="projects-text-section">
              <div class="projects-heading-text-div">
                <p class="projects-heading-text">Eleifend quis auctor nulla elit molestie.</p>
              </div>
              <div class="projects-description-text-div">
                <p class="projects-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="row projects-tags-div">
              <div class="mb-3"><img class="projects-language-image" src={language}/></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>CSS</p></div></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>REACT</p></div></div>
            </div>
          </div>
          <div class="mb-3 projects-project-detail">
          <div class="projects-image-div">
              <img class="projects-image" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"/>
            </div>
            <div class="projects-starfork-div">
              <div class="projects-star-div">
                <div class="projects-star-image-div">
                  <img src={star}/>
                </div>
                <div class="projects-star-text-div"><p class="projects-star-text">Star | 49</p></div>
              </div>
              <div class="projects-fork-div">
                <div class="projects-fork-image-div">
                  <img src={fork}/>
                </div>
                <div class="projects-fork-text-div"><p class="projects-fork-text">| 39</p></div>
              </div>
            </div>
            <div class="projects-text-section">
              <div class="projects-heading-text-div">
                <p class="projects-heading-text">Eleifend quis auctor nulla elit molestie.</p>
              </div>
              <div class="projects-description-text-div">
                <p class="projects-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="row projects-tags-div">
              <div class="mb-3"><img class="projects-language-image" src={language}/></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>CSS</p></div></div>
              <div class="mb-3"><div class="projects-tags-individual-div"><p>REACT</p></div></div>
            </div>
          </div>
        </div>
        <img class="projects-bottom-left-img" src={bottomLeft}/>
        <img class="projects-bottom-right-img" src={bottomRight}/>
      </div>
);
};
export default Projects;