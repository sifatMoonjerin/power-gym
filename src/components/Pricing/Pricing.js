import React, { useState } from 'react';
import PaypalBox from '../PaypalBox/PaypalBox';

const Pricing = () => {
    const [price, setPrice] = useState(0);

    return (
        <div>
            <h1>Membership Page</h1>
            <PaypalBox price={price}/>
        </div>
    );
};

export default Pricing;