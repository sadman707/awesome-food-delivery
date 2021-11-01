import React from 'react';
import About from '../About/About';
import Coming from '../Coming/Coming';

import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="header-container">
            <div className="header-image">
                <img src="https://i.ibb.co/vdrCSpW/Packages-and-parcels-delivery-covid-19-quarantine-delivery-transfer-orders-Cheerful-courier-in-red-u.jpg" alt="" />
                {<div className="header-text">
                    <h1 className="h1-font-color">Welcome to Our Food Delivery Services</h1>
                    <h2 className="h2-font-color">You will be fully satisfied</h2>
                    <h1 className="h1-font-color">100% Satisfaction</h1>
                </div>}
            </div>
            <Services></Services>
            <About></About>
            <Coming></Coming>

        </div>
    );
};


export default Home;