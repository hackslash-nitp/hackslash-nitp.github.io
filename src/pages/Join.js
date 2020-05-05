import React, {useEffect, useState} from 'react';
import slackLogo from '../assets/images/join/slack-logo.svg';
import wpLogo from '../assets/images/join/whatsapp-logo.svg';
import firebase from 'firebase';

const wpLink = 'https://chat.whatsapp.com/K9vmjXqbefS34QvwTwiEmf';


const Join = (props) => {
    // var alert = useAlert();
    useEffect(() => {
        props.setPage('join');
    });

    const [app, setState] = useState('wp');

    const setApp = (newApp) => {
        if (app !== newApp)
            setState(newApp);
    }

    const slackForm = <div>
        <p className="join-title">Join HackSlash on Slack!</p>
        <form>
            <input className="join-input-field" placeholder="Name" id="join-name"/> <br/>
            <input className="join-input-field" placeholder="Email" id="join-email"/> <br/>
            <input className="join-input-field" placeholder="Link to a merged PR in HackSlash on GitHub"
                   id="join-link"/> <br></br>
            <input type='button' className="join-send-button" value='Request an invitation' onClick={() => {
                const data = {
                    name: document.getElementById("join-name").value,
                    email: document.getElementById("join-email").value,
                    link: document.getElementById("join-link").value
                }

                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
                    && data.email.length !== 0
                    && data.name.length !== 0
                    && data.link.length !== 0)
                    firebase.database().ref('/slack-applications/' + data.email.split('.')[0]).set(data)
                        .then((value) => {
                            // alert.show('Request saved! You will receive an invite if it is approved!');
                        }, (value) => {
                            // alert.error('Something went wrong, please try again!');
                        });
                else {
                    // alert.error('Please fill all fields correctly');
                }
            }}/>
        </form>
    </div>;

    const wpButton = <div>
        <p className="join-title">Join HackSlash on WhatsApp!</p>
        <a href={wpLink}><button className={'wp-button'}>Join our WhatsApp group</button></a>
    </div>

    return (
        <div className="join">
            <div className={'logos'}>
                <img src={wpLogo} className={"wp-logo " + (app === 'wp' ? 'wp-selected' : '')} alt="logo"
                     onClick={() => {
                         setApp('wp')
                     }}/>
                or
                <img src={slackLogo} className={"slack-logo " + (app === 'slack' ? 'slack-selected' : '')} alt="logo"
                     onClick={() => {
                         setApp('slack')
                     }}/>
            </div>
            {(app === 'wp' ? wpButton : slackForm)}

        </div>
    );
}

export default Join;