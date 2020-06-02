import React from 'react';

const PlanCard = ({handlePlan, price, bgImg, heading, features}) => {
    return (
        <div className="card bg-dark text-white" style={{"width": "300px","height": "450px"}}>
            <img src={bgImg} style={{"height": "450px"}} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h4 className="card-title">{heading}</h4>
                <h1 className="card-title text-warning">${price}</h1>
        
                <ul className="card-text">
                    {features.map(feature => <li>{feature}</li>)}
                </ul>
                <button onClick={()=>handlePlan(price)} className="btn btn-warning">Purchase</button>
            </div>
        </div>
    );
};

export default PlanCard;