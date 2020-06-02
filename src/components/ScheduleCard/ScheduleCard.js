import React from 'react';

const ScheduleCard = ({day, time}) => {
    return (
        <div className="card" style={{"width": "250px"}}>
            <div className="card-body">
                <h4 className="card-title">{day}</h4>
                <p className="card-text text-warning">{time}</p>
            </div>
        </div>
    );
};

export default ScheduleCard;