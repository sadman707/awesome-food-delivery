import axios from 'axios';
import { useForm } from "react-hook-form";
import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

const Details = (props) => {
    let location = useLocation();
    console.log(location.serviceProps);
    let serviceDetails = location.serviceProps;

    //new
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://enigmatic-forest-68260.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (

        <div>

            <div className="row">

                <div className="col-md-9">
                    <div className="card mb-5 px-5 py-4">
                        <div className="row g-0 p-5">
                            <h2>Your Order Details</h2>
                            <div className="col-md-3 p-3">
                                <img src={serviceDetails.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">{serviceDetails.name}</h5>
                                    <h5 className="card-title">{serviceDetails.price}</h5>
                                    <p className="card-text">{serviceDetails.description}.</p>
                                    <h6 className="card-text">{serviceDetails.details}</h6>

                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="add-services">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Please fill this to place your order</h2>
                            <input {...register("name")} placeholder="your name" />
                            <input {...register("email")} placeholder="your email" />
                            <input {...register("address")} placeholder="your address" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Details;