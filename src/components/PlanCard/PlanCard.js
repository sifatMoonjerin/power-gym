import React from 'react';

const PlanCard = ({handlePlan, price, bgImg, heading, features}) => {
    return (
        <div className="card bg-dark text-white" style={{"width": "300px"}}>
            <img src={bgImg} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h4 className="card-title">{heading}</h4>
                <h1 className="card-title text-warning">${price}</h1>
                <p className="card-text">
                    <ul>
                        {features.map(feature => <li>{feature}</li>)}
                    </ul>
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
                <button onClick={()=>handlePlan(price)} className="btn btn-warning">Purchase</button>
            </div>
        </div>
    );
};

export default PlanCard;