import React from 'react';

const ClassCard = ({showDetails, name, bgImg}) => {
    return (
        <div>
            <div className="card bg-dark text-white" style={{"width": "300px", "height" : "200px"}}>
                <img src={bgImg} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <button className="btn btn-warning" onClick={showDetails}>{name}</button>
                </div>
            </div>
            
        </div>
    );
};

export default ClassCard;