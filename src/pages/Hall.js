import React, {useEffect} from 'react';
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
import designersSection from '../assets/images/hall/designers-section.svg';
import developersSection from '../assets/images/hall/developers-section.svg';
import lowerLeft from '../assets/images/hall/lower-left.svg';
import lowerRight from '../assets/images/hall/lower-right.svg';
import bottomLeft from '../assets/images/hall/bottom-left.svg';
import bottomRight from '../assets/images/hall/bottom-right.svg';

const Hall = (props) => {

    const state = {
        leads: [
            {
                name: 'Tushar Anand',
                role: 'President',
                imageURL: 'https://avatars2.githubusercontent.com/u/34808961?s=400&u=5ec82d4c8670ebe14eae0038deeb7778347ce896&v=4',
                description: 'A well establish security researcher, currently a data security intern at OYO, he played a crucial role in setting up the club.',
                githubURL: 'https://github.com/anandtushar111',
                linkedinURL: 'https://www.linkedin.com/in/anandtushar111/'
            },
            {
                name: 'Saurabh Jha',
                role: 'Vice-President',
                imageURL: 'https://media-exp1.licdn.com/dms/image/C5103AQHP4D5-pFA3kQ/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=rznoZ9GPSNzbl7Edm-F1DoDz3YMyfdlTfFUVlVB50WY',
                description: 'An expert web developer, and an active competitive programmer, and a machine learning enthusiast',
                githubURL: 'https://github.com/jhasaurabh312',
                linkedinURL: 'https://www.linkedin.com/in/saurabh-kumar-jha-358293150/'
            },
            {
                name: 'Insha Nadeem',
                role: 'Treasurer',
                imageURL: 'https://media-exp1.licdn.com/dms/image/C5603AQEStFGDnmQPFg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=RiP3vjshmG2D28rhlTrhSTT_FYGK_Ur6pAHXPCkuzjk',
                description: 'An excellent orator and a wonderful mentor. She helped organize and host all of the club\'s meetups. ',
                githubURL: '',
                linkedinURL: 'https://www.linkedin.com/in/inshanadeem/'
            }
        ],
        designers: [
            {
                name: 'Sudhanshu Singh',
                role: 'Remote Designer',
                imageURL: 'https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg',
                description: 'A student designer based in Kolkata, he helped design the UI/UX for a few prominent projects in the club, including this website.',
                githubURL:'',
                linkedinURL: ''
            },
            {
                name: 'Kumar Harsh',
                role: 'Designer',
                imageURL: 'https://avatars0.githubusercontent.com/u/46624829?s=460&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&v=4',
                githubURL:'https://github.com/krharsh17',
                linkedinURL: 'https://linkedin.com/in/krharsh17'
            }
        ],
        developers: []
    };

    useEffect(() => {
        props.setPage('hall');
    });

    return (
        <div className="hall-body">
            <div className="hall-upper-div">
                <div className="hall-upper-left-div">
                    <img className="hall-top-left-image" src={topLeft} alt={''}/>
                </div>
                <div className="hall-upper-right-div">
                    <div className="upper-heading-div">
                        <p className="upper-heading-para">The Pioneers</p>
                    </div>
                    <div className="lower-description-div">
                        <p className="lower-description-para">We believe that everyone deserves the credit for the good
                            work that they do. A community is known by the way it values its people, so here are the top
                            contributors of the club!
                        </p>
                    </div>
                </div>
            </div>
            <img className="hall-top-right-image" src={topRight} alt={''}/>
            <div className="hall-leads-line-div">
                <img className="hall-leads-section-image" src={leadsLine} alt={''}/>
            </div>
            <div className={'leads-container'}>
            {state.leads.map((member) => <MemberCard data={member}/>)}
            </div>
            <img className="hall-middle-left-image" src={middleLeft} alt={''}/>
            <img className="hall-middle-right-image" src={middleRight} alt={''}/>
            <div className="hall-designers-line-div">
                <img className="hall-designers-section-image" src={designersSection} alt={''}/>
            </div>
            <div className={'designers-container'}>
                {state.designers.map((member) => <MemberCard data={member}/>)}
            </div>
            <img className="hall-lower-left-image" src={lowerLeft} alt={''}/>
            <img className="hall-lower-right-image" src={lowerRight} alt={''}/>
            <div className="hall-developers-line-div">
                <img className="hall-developers-section-image" src={developersSection} alt={''}/>
            </div>
            <div className={'developers-container'}>
                {state.developers.map((member) => <MemberCard data={member}/>)}
            </div>
            <img className="hall-bottom-left-image" src={bottomLeft} alt={''}/>
            <img className="hall-bottom-right-image" src={bottomRight} alt={''}/>
        </div>
    );
};

const MemberCard = (props) => {
    return (
        <div className="hall-leads-section">
            <div className="mb-3 hall-leads-detail">
                <div className="hall-leads-upper-div">
                    <div className="hall-lead-name">
                        <p className="hall-lead-name-para">{props.data.name}</p>
                    </div>
                    <div className="hall-lead-skill">
                        <p className="hall-lead-skill-para">{props.data.role}</p>
                    </div>

                </div>
                <div className="hall-lead-image-div">
                    <img alt={''} className="hall-lead-image"
                         src={props.data.imageURL}/>
                </div>
                <div className="hall-leads-lower-div">
                    <div className="hall-contrib-div">
                        <img alt={''} className="hall-contrib-image"
                             src={contribution}/>
                    </div>
                    <div className="hall-contrib-text-div">
                        <div className="hall-enclosing-div"><p
                            className="hall-contrib-text-para">{props.data.description}</p>
                        </div>
                    </div>
                    <div className="row hall-media-icons-div">
                        <div><a href={props.data.githubURL}><img alt={''} className="hall-media-image"
                                                                 src={githubIcon}/></a></div>
                        <div><a href={props.data.linkedinURL}><img alt={''} className="hall-media-image"
                                                                   src={linkedinIcon}/></a></div>
                        {/*<div><img alt={''} className="hall-media-image" src={dribbleIcon}/></div>*/}
                        {/*<div><a href={props.data.mediumURL}><img alt={''} className="hall-media-image" src={mediumIcon}/></div>*/}
                        {/*<div><a href={props.data.devURL}><img alt={''} className="hall-media-image" src={devIcon}/></div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hall;