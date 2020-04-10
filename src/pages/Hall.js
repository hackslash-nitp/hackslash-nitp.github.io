import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/Hall.scss';
import topLeft from '../assets/images/hall/top-left.svg';
import topRight from '../assets/images/hall/top-right.svg';
import middleLeft from '../assets/images/hall/middle-left.svg';
import middleRight from '../assets/images/hall/middle-right.svg';
import leadsLine from '../assets/images/hall/leads-section.svg';
import contribution from '../assets/images/hall/contribution.svg';
import githubIcon from '../assets/images/hall/githubIcon.svg';
import linkedinIcon from '../assets/images/hall/linkedinIcon.svg';
import dribbleIcon from '../assets/images/hall/dribbleIcon.svg';
import mediumIcon from '../assets/images/hall/mediumIcon.svg';
import designersSection from '../assets/images/hall/designers-section.svg';
import developersSection from '../assets/images/hall/developers-section.svg';
import lowerLeft from '../assets/images/hall/lower-left.svg';
import lowerRight from '../assets/images/hall/lower-right.svg';
import bottomLeft from '../assets/images/hall/bottom-left.svg';
import bottomRight from '../assets/images/hall/bottom-right.svg';
import devIcon from '../assets/images/hall/devIcon.svg';

const Hall = () => {
    return (
        <div class="hall-body">
          <div class="hall-upper-div">
            <div class="hall-upper-left-div">
              <img class="hall-top-left-image" src={topLeft}/>
            </div>
            <div class="hall-upper-right-div">
              <div class="upper-heading-div">
                <p class="upper-heading-para">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="lower-description-div">
                <p class="lower-description-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
              </div>
            </div>
          </div>
          <img class="hall-top-right-image" src={topRight}/>
          <div class="hall-leads-line-div">
            <img class="hall-leads-section-image" src={leadsLine}/>
          </div>
          <div class="row d-flex align-items-center hall-leads-section">
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
          </div>
          <img class="hall-middle-left-image" src={middleLeft}/>
          <img class="hall-middle-right-image" src={middleRight}/>
          <div class="hall-designers-line-div">
            <img class="hall-designers-section-image" src={designersSection}/>
          </div>
          <div class="row d-flex align-items-center hall-leads-section">
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
          </div>
          <img class="hall-lower-left-image" src={lowerLeft}/>
          <img class="hall-lower-right-image" src={lowerRight}/>
          <div class="hall-developers-line-div">
            <img class="hall-developers-section-image" src={developersSection}/>
          </div>
          <div class="row d-flex align-items-center hall-leads-section">
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
            <div class="mb-3 hall-leads-detail">
              <div class="hall-leads-upper-div">
                <div class="hall-lead-name"><p class="hall-lead-name-para">Parth Sharma</p></div>
                <div class="hall-lead-skill"><p class="hall-lead-skill-para">Full-stack</p></div>
                <div class="hall-lead-image-div"><img class="hall-lead-image" src="https://images.livemint.com/img/2019/08/22/600x338/AFP_1JJ5U1_1566464512957_1566464529484.jpg"/></div>
              </div>
              <div class="hall-leads-lower-div">
                <div class="hall-contrib-div"><img class="hall-contrib-image" src={contribution}/></div>
                <div class="hall-contrib-text-div">
                  <div class="hall-enclosing-div"><p class="hall-contrib-text-para">Dignissim metus egestas tempus euismod turpis turpis turpis nisi eleifend eu suspendisse commodo nunc eget risus mauris amet</p></div>
                </div>
                <div class="row hall-media-icons-div">
                  <div><img class="hall-media-image" src={githubIcon}/></div>
                  <div><img class="hall-media-image" src={linkedinIcon}/></div>
                  <div><img class="hall-media-image" src={dribbleIcon}/></div>
                  <div><img class="hall-media-image" src={mediumIcon}/></div>
                  <div><img class="hall-media-image" src={devIcon}/></div>
                </div>
              </div>
            </div>
          </div>
          <img class="hall-bottom-left-image" src={bottomLeft}/>
          <img class="hall-bottom-right-image" src={bottomRight}/>
        </div>
);
};

export default Hall;