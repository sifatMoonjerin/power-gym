import React, { useState } from 'react';
import PaypalBox from '../PaypalBox/PaypalBox';
import MembershipForm from '../MembershipForm/MembershipForm';

const Pricing = () => {
    const [price, setPrice] = useState(0);
    const [showPaypal, setShowPaypal] = useState(false);
    const [memberDetails, setMemberDetails] = useState({})

    const formComplete = details => {
        setMemberDetails(details);
        setShowPaypal(true);
    }

    console.log('asf',memberDetails);

    return (
        <div>
            <h1>Membership Page</h1>
            { !showPaypal && <MembershipForm formComplete={formComplete}/>}
            { showPaypal && <PaypalBox price={price}/> }
        </div>
    );
};

export default Pricing;