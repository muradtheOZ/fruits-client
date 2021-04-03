import React, { useContext } from 'react';
import './Shipment.css'
import { useForm } from "react-hook-form";
import { userContext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {value,value2,value3} = useContext(userContext);
    const [loggedInUSer, setLoggedInUser] = value;
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUSer.name} ref={register({ required: true })} placeholder="Enter your Name" />
            {errors.name && <span className="error">Name is required</span>}

            <input name="email"  defaultValue={loggedInUSer.email} ref={register({ required: true })}placeholder="Enter your Email" />
            {errors.email && <span className="error">Email is required</span>}

            <input name="address" ref={register({ required: true })} placeholder="Enter your address" />
            {errors.address && <span className="error">Address is required</span>}

            <input name="number" ref={register({ required: true })} placeholder="Enter your Number" />
            {errors.number && <span className="error">number is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Shipment;