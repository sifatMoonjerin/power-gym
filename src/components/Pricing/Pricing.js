import React, { useState, useEffect } from 'react';
import PaypalBox from '../PaypalBox/PaypalBox';
import MembershipForm from '../MembershipForm/MembershipForm';
import PlanCard from '../PlanCard/PlanCard';
import plans from '../../fakeData/plans';

const Pricing = () => {
    const [price, setPrice] = useState(0);
    const [showPaypal, setShowPaypal] = useState(false);
    const [memberDetails, setMemberDetails] = useState({});
    const [planList, setPlanList] = useState([]);

    useEffect(()=>{
        setPlanList([...plans])  
    }, [])

    const formComplete = details => {
        setMemberDetails(details);
        setShowPaypal(true);
    }                                                                                                                                                                                                                                                                                                                                               

    return (
        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            <h1>Membership Page</h1>
            <div className='m-5 d-flex justify-content-around flex-wrap'>
            { !price && planList.map(plan => <PlanCard 
                    handlePlan={setPrice}
                    heading={plan.heading}
                    bgImg={plan.bgImg}
                    price={plan.price}
                    features={plan.features} 
                />
            )}
            </div>
            { !showPaypal && !!price && <MembershipForm formComplete={formComplete}/> }
            { showPaypal && <PaypalBox price={price} memberDetails={memberDetails}/> }
        </div>
    );
};

export default Pricing;