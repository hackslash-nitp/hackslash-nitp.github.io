import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/Hall.scss';
import topLeft from '../assets/images/hall/top-left.svg';
import topRight from '../assets/images/hall/top-right.svg';
import leadsLine from '../assets/images/hall/leads-section.svg';

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
        </div>
);
};

export default Hall;