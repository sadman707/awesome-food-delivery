import React from 'react';
import './PlaceOrder.css';
import { NavLink, useLocation } from "react-router-dom";

const PlaceOrder = () => {
    let location = useLocation();
    console.log(location.placeOrderProps);
    let placeOrderDetails = location.placeOrderProps;
    return (
        <div>
            <h2>This is place order{placeOrderDetails.name}</h2>
            <h2>This is place order{placeOrderDetails.price}</h2>
            <h2>This is place order{placeOrderDetails.description}</h2>

        </div>
    );
};

export default PlaceOrder;