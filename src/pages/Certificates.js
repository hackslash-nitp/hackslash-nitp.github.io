import React, {useEffect, useState} from 'react';
import firebase from "../Firebase";

import bg from '../assets/images/certificates/certi-bg.svg';

const Certificates = (props) => {

    const [state, setState] = useState({
        id: '',
        name: '',
        college: '',
        event: '',
        date: '',
        verifySuccess: 'none',
        showDetails: false
    });

    useEffect(() => {
        props.setPage('certificates');
    })
    const checkData = () => {
        firebase.database().ref('certificates/' + state.id).once('value').then(function (snapshot) {
            if (snapshot.val() == null) {
                setState({verifySuccess: 'false'});
                setTimeout(() => {
                    setState({verifySuccess: 'none'});
                }, 2000);
            } else {
                setState({
                    name: snapshot.val().name,
                    college: snapshot.val().college,
                    event: snapshot.val().event,
                    date: snapshot.val().date,
                    verifySuccess: 'true',
                    showDetails: true
                });
            }
        });
    }

    const showToast = () => {
        if (state.verifySuccess === 'true')
            return <p className="certi-success-toast">This certificate is valid</p>;
        else if (state.verifySuccess === 'false')
            return <p className="certi-failure-toast">This certificate is invalid</p>;
    }

    const showUserData = () => {
        if (state.showDetails)
            return <div className="certi-details">
                <div className={'certi-details-headers'}>
                    <div>Name</div>
                    <div>College</div>
                    <div>Event</div>
                    <div>Date</div>
                </div>
                <div className={'certi-details-data'}>
                    <div>{state.name}</div>
                    <div>{state.college}</div>
                    <div>{state.event}</div>
                    <div>{state.date}</div>
                </div>
            </div>;
    }

    return (
        <div className={'certificates'}>
            <img src={bg} className={'certi-bg-img'} alt={''}/>
            <div className={'certi-verify-card'}>
                <input className={'certi-verify-id'} type="text" placeholder="Certificate ID here"
                       onChange={(event => setState({id: event.target.value}))}/>
                <button className={'certi-verify-button'} type="button" onClick={checkData}>VERIFY
                </button>
                {showToast()}
                {showUserData()}
            </div>

        </div>
    );
}

export default Certificates;