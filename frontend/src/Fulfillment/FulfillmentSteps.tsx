import React from 'react';

function FulfillmentSteps(props: any) {
    return <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''} >Shipped</div>

    </div>
    }

export default FulfillmentSteps;   