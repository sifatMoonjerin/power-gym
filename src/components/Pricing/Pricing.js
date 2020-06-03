import React, { useState, useEffect } from 'react';
import PaypalBox from '../PaypalBox/PaypalBox';
import MembershipForm from '../MembershipForm/MembershipForm';
import PlanCard from '../PlanCard/PlanCard';
// import plans from '../../fakeData/plans';

const Pricing = () => {
    const [price, setPrice] = useState(0);
    const [showPaypal, setShowPaypal] = useState(false);
    const [memberDetails, setMemberDetails] = useState({});
    const [planList, setPlanList] = useState([]);

    useEffect(()=>{
        fetch('https://aqueous-depths-35890.herokuapp.com/plans')
        .then(res => res.json())
        .then(data => {
            setPlanList(data);
        });
    }, [])

    const formComplete = details => {
        setMemberDetails(details);
        setShowPaypal(true);
    }                                                                                                                                                                                                                                                                                                                                               

    return (
        <div> 
            <div className='m-5 d-flex justify-content-around flex-wrap'>
            { !price && planList.map(plan => <PlanCard 
                    handlePlan={setPrice}
                    heading={plan.heading}
                    bgImg={plan.bgImg}
                    price={plan.price}
                    features={plan.features}
                    key={plan._id} 
                />
            )}
            </div>
            { !showPaypal && !!price && <MembershipForm formComplete={formComplete}/> }
            { showPaypal && <PaypalBox price={price} memberDetails={memberDetails}/> }
        </div>
    );
};

export default Pricing;