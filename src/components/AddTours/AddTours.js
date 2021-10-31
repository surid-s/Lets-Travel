import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddTours.css'

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://dark-tomb-39983.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-tours">
            <h1 className="text-success" >Please Add your Destination</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title" className="mb-3" {...register("name", { required: true, maxLength: 40 })} /> <br />
                <textarea placeholder="description" className="mb-3"  {...register("details")} /> <br />
                <input type="number" placeholder="Price" {...register("fee", { min: 18, max: 99 })} /> <br /> <br />
                <input placeholder="Image Link" className="mb-3"  {...register("image")} /> <br />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddTours;