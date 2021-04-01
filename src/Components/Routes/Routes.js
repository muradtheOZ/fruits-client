import React, { useState,useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Route.css';
import { userContext } from '../../App';
import transports from '../../fakedata.json';
import Pricing from '../Pricing/Pricing';
import { Route, useHistory } from 'react-router';

const Routes = () => {
  
  const {value,value2,value3} = useContext(userContext);
    const[transportMode,setTransportMode] = value2;
    const [transportInfo,seTTransportInfo] = value3;
  console.log(transportMode);

  
    const { register, handleSubmit, watch, errors } = useForm();
    const [newUser, setNewUser] = useState(false);
    
    const history =  useHistory()
    const onSubmit = (data) => {
      seTTransportInfo(data);
      history.push('/pricing');
    
    
      }
      
    return (
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <h1>Transport Mode {transportMode}</h1>
          <form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
            <input name="departure"  ref={register({ required: true })} placeholder="Your Departure" />
            {errors.name && <span className="error">Name is required</span>}

            <input name="destination"   ref={register({ required: true })}placeholder="Your Destination" />
            {errors.name && <span className="error">Destination is required</span>}

            <input type='datetime-local' name="date" ref={register({ required: true })} placeholder="Enter your address" />
            {errors.name && <span className="error">Date is required</span>}

            <input type="submit" />
        </form>  
        </div>

        <div className="col-lg-7" col-md-12> 
        </div>
      </div>
        
            
    );
};

export default Routes;