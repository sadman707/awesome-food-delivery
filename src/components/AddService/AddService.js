import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Your Service</h2>
                <input {...register("name")} placeholder="your name" />
                {/* <input type="email" name="email" id="" placeholder="your email" /> */}
                <textarea {...register("description")} placeholder="description" />
                <input {...register("details")} placeholder="details" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image-url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;