import React from 'react';
import ReactDOM from "react-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/Events.scss';
import topLeft from '../assets/images/events/topLeft.svg';
import search from '../assets/images/searchIcon.jpg';
import topRight from '../assets/images/events/topRight.svg';
import date from '../assets/images/events/date.svg';
import time from '../assets/images/events/time.svg';
import bottomVec from '../assets/images/events/bottomVec.svg';
import leftVec from '../assets/images/events/leftVec.svg';
import rightVec from '../assets/images/events/rightVec.svg';
import location from '../assets/images/events/location.svg';


const Events = () => {
    var item = {location: "Patna", name: "Test", detail: "Detailed", time: "12PM"};
    return (
        <div>
          <div class="events-head-div">
          <img class="events-top-back-img" src={topLeft}/>
            <div class="events-top-right-div">
            <img class="events-img-top" src={topRight}/>
            </div>
            <div class="events-top-left-div">
            <p class="events-para-title"> Ready to join the movement?</p>
            <p class="events-para-description">Check out what's happening soon in the Campus.</p>
            <div class="events-search-div">
            <div class="events-search-left-div">
            <img class="events-search-img" src={search}/>
            <hr/>
            </div>
            <div class="events-search-right-div">
            <input type="text" placeholder="Search Projects" class="events-search-text"/>
            <hr/>
            </div>
          </div>
          </div>
          </div>
          <div class="events-hackslash-div">
          <div class="events-hackslash-text-section">
            <div class="events-upcoming-div"><p class="events-hackslash-para-upcoming">Upcoming</p></div>
            <div class="events-past-div"><p class="events-hackslash-para-past">Past</p></div>
          </div>
          <div class="events-hackslash-underline-section">
            <hr class="events-hackslash-line"/>
          </div>
          </div>
          <div class="row events-list-div">
          <img class="events-left-side-vec" src={leftVec}/>
          <img class="events-right-side-vec" src={rightVec}/>
          <img class="events-bottom-vec" src={bottomVec}/>
          <div class="mb-3 events-event-detail">
            <div class="events-image-div">
              <img class="events-image" src="https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2018/01/Events-In-Chennai.jpg"/>
              <div class="events-location-div">
                <div class="events-location-image-div">
                  <img class="events-timedate-image" src={location}/>
                </div>
                <div class="events-location-text-div"><p class="events-location-text">Location</p></div>
              </div>
            </div>
            <div class="events-text-section">
              <div class="events-heading-text-div">
                <p class="events-heading-text">Kondoa Community Network School of Internet Governance</p>
              </div>
              <div class="events-description-text-div">
                <p class="events-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="events-datetime-div">
              <div class="events-time-div">
                <div class="events-time-image-div">
                  <img class="events-timedate-image" src={date}/>
                </div>
                <div class="events-time-text-div"><p class="events-time-text">05-04-2020</p></div>
              </div>
              <div class="events-date-div">
                <div class="events-date-image-div">
                  <img class="events-timedate-image" src={time}/>
                </div>
                <div class="events-date-text-div"><p class="events-date-text">10:00AM-12:00PM</p></div>
              </div>
            </div>
          </div>
          <div class="mb-3 events-event-detail">
            <div class="events-image-div">
              <img class="events-image" src="https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2018/01/Events-In-Chennai.jpg"/>
              <div class="events-location-div">
                <div class="events-location-image-div">
                  <img class="events-timedate-image" src={location}/>
                </div>
                <div class="events-location-text-div"><p class="events-location-text">Location</p></div>
              </div>
            </div>
            <div class="events-text-section">
              <div class="events-heading-text-div">
                <p class="events-heading-text">Kondoa Community Network School of Internet Governance</p>
              </div>
              <div class="events-description-text-div">
                <p class="events-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="events-datetime-div">
              <div class="events-time-div">
                <div class="events-time-image-div">
                  <img class="events-timedate-image" src={date}/>
                </div>
                <div class="events-time-text-div"><p class="events-time-text">05-04-2020</p></div>
              </div>
              <div class="events-date-div">
                <div class="events-date-image-div">
                  <img class="events-timedate-image" src={time}/>
                </div>
                <div class="events-date-text-div"><p class="events-date-text">10:00AM-12:00PM</p></div>
              </div>
            </div>
          </div>
          <div class="mb-3 events-event-detail">
            <div class="events-image-div">
              <img class="events-image" src="https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2018/01/Events-In-Chennai.jpg"/>
              <div class="events-location-div">
                <div class="events-location-image-div">
                  <img class="events-timedate-image" src={location}/>
                </div>
                <div class="events-location-text-div"><p class="events-location-text">Location</p></div>
              </div>
            </div>
            <div class="events-text-section">
              <div class="events-heading-text-div">
                <p class="events-heading-text">Kondoa Community Network School of Internet Governance</p>
              </div>
              <div class="events-description-text-div">
                <p class="events-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="events-datetime-div">
              <div class="events-time-div">
                <div class="events-time-image-div">
                  <img class="events-timedate-image" src={date}/>
                </div>
                <div class="events-time-text-div"><p class="events-time-text">05-04-2020</p></div>
              </div>
              <div class="events-date-div">
                <div class="events-date-image-div">
                  <img class="events-timedate-image" src={time}/>
                </div>
                <div class="events-date-text-div"><p class="events-date-text">10:00AM-12:00PM</p></div>
              </div>
            </div>
          </div>
          <div class="mb-3 events-event-detail">
            <div class="events-image-div">
              <img class="events-image" src="https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2018/01/Events-In-Chennai.jpg"/>
              <div class="events-location-div">
                <div class="events-location-image-div">
                  <img class="events-timedate-image" src={location}/>
                </div>
                <div class="events-location-text-div"><p class="events-location-text">Location</p></div>
              </div>
            </div>
            <div class="events-text-section">
              <div class="events-heading-text-div">
                <p class="events-heading-text">Kondoa Community Network School of Internet Governance</p>
              </div>
              <div class="events-description-text-div">
                <p class="events-description-text">At aliquet mattis aliquam posuere. Congue ante ac ultrices nunc.</p>
              </div>
            </div>
            <div class="events-datetime-div">
              <div class="events-time-div">
                <div class="events-time-image-div">
                  <img class="events-timedate-image" src={date}/>
                </div>
                <div class="events-time-text-div"><p class="events-time-text">05-04-2020</p></div>
              </div>
              <div class="events-date-div">
                <div class="events-date-image-div">
                  <img class="events-timedate-image" src={time}/>
                </div>
                <div class="events-date-text-div"><p class="events-date-text">10:00AM-12:00PM</p></div>
              </div>
            </div>
          </div>
        </div>
        </div>
);
};
        export default Events;