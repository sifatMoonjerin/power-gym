import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PaypalBox = ({price, memberDetails}) => {
    return (
        <div>
            <PayPalButton
                amount={price}
                shippingPreference="NO_SHIPPING" 
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
            
                    // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //     orderID: data.orderID
                    //     })
                    // });
                }}
                options={{
                    clientId: "AVc7YQV6yOdALphh5g4tW7XphlCV9Lee0xQ3FYhstdgBpRZaI7dfv9Zz1PM5d6ehIBn8SReUROCQ9i3W"
                }}
            />
        </div>
    );
};

export default PaypalBox;