import React, { useContext } from 'react';
import './Shipment.css'
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import Order from '../Order/Order';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { value, value2, value3 } = useContext(userContext);
    const [loggedInUSer, setLoggedInUser] = value;
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="row d-flex  flex-sm-row-reverse">
            
            <div className="col-md-6">
                <h3 className="p-3 text-center">Your All order</h3>
                <Order/>
            </div>

            <div className="col-md-5">
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUSer.name} ref={register({ required: true })} placeholder="Enter your Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={loggedInUSer.email} ref={register({ required: true })} placeholder="Enter your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="address" ref={register({ required: true })} placeholder="Enter your address" />
                {errors.address && <span className="error">Address is required</span>}

                <input name="number" ref={register({ required: true })} placeholder="Enter your Number" />
                {errors.number && <span className="error">number is required</span>}

                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Shipment;