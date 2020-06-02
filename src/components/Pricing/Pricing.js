import React, { useState } from 'react';
import PaypalBox from '../PaypalBox/PaypalBox';
import MembershipForm from '../MembershipForm/MembershipForm';
import PlanCard from '../PlanCard/PlanCard';
import plans from '../../fakeData/plans';

const Pricing = () => {
    const [price, setPrice] = useState(0);
    const [showPaypal, setShowPaypal] = useState(false);
    const [memberDetails, setMemberDetails] = useState({})

    const formComplete = details => {
        setMemberDetails(details);
        setShowPaypal(true);
    }                                                                                                                                                                                                                                                                                                                                               

    return (
        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            <h1>Membership Page</h1>
            { !price && plans.map(plan => <PlanCard 
                    handlePlan={setPrice}
                    heading={plan.heading}
                    bgImg={plan.bgImg}
                    price={plan.price}
                    features={plan.features} 
                />
            )}
            { !showPaypal && !!price && <MembershipForm formComplete={formComplete}/> }
            { showPaypal && <PaypalBox price={price} memberDetails={memberDetails}/> }
        </div>
    );
};

export default Pricing;