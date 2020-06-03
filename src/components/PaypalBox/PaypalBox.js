import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PaypalBox = ({price, memberDetails}) => {
    return (
        <div className="d-flex justify-content-center">
            <div style={{'width': '300px'}}>
            <PayPalButton
                amount={price}
                shippingPreference="NO_SHIPPING" 
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    console.log({orderID: data.orderID, ...memberDetails});
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("https://aqueous-depths-35890.herokuapp.com/addPlans", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID, ...memberDetails
                        })
                    });
                }}
                options={{
                    clientId: "AVc7YQV6yOdALphh5g4tW7XphlCV9Lee0xQ3FYhstdgBpRZaI7dfv9Zz1PM5d6ehIBn8SReUROCQ9i3W"
                }}
            />
            </div>
        </div>
    );
};

export default PaypalBox;