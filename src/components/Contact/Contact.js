import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="row  my-5 px-2">
                <div className="col-md-6 row-style">
                    <h1>Here you will get the best food delivery services</h1>
                    <h3>For Any Querries You can call us</h3>
                    <span>Phone:018545645645</span>
                    <p>Email: fooddeliveryservices@gmail.com</p>
                </div>
                <div className="col-md-6 ps-5">
                    <h1>Contact Us</h1>
                    <img className="contact-image" src="https://i.ibb.co/gwcwfdV/julian-hochgesang-Dkn8-z-PIbwo-unsplash.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Contact;