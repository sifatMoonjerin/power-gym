import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

const ClassDetails = ({details, hideDetails}) => {
    return (
        <div className='row pr-5 pl-5'>
            <div className='col-md-6'>
                <img src={details.bgImg} alt='...' style={{'height':'30vh'}}/>
                <p>{details.summary}</p>
                <ul>
                    {details.features.map(feature => <li>{feature}</li>)}
                </ul>
            </div>
            
            <div className='col-md-6'>
                <h1><span className='text-warning'>CLASS</span> SCHEDULE</h1>
                <div className="d-flex justify-content-between flex-wrap">
                    {details.schedule.map(s => <ScheduleCard day={s.day} time={s.time}/>)}
                </div>
                
                <button className="btn btn-warning m-2" onClick={hideDetails}>Classes</button>
                <Link to="/pricing">
                    <button className="btn btn-warning m-2" >Join Us</button>
                </Link>
            </div>
        </div>
    );
};

export default ClassDetails;