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
      console.log(transportMode);
      
    return (
      <div className="custom-padding">
      <div className="row container  card p-2 m-2 m-auto">
       <div className="row custom-border pt-2 mt-2">
         <div className="col-md-6">
            <h5>Description</h5>
         </div>

         <div className="col-md-5 d-flex">
            <h5>Quantity</h5>
            <h5 className="ms-auto">Price</h5>
         </div>

       </div>

       <div className="row custom-border pt-2 mt-2">
       <div className="col-md-6">
       <h5>{transportMode.name}</h5>
         </div>

         <div className="col-md-5 d-flex">
         <h5>1</h5>
            <h5 className="ms-auto">{transportMode.price}</h5>
         </div>

       </div>

       <div className="row custom pt-2 mt-2">
       <div className="col-md-6">
            <h5>Total</h5>
         </div>

         <div className="col-md-5 d-flex">
            <h5 className="ms-auto">{transportMode.price}</h5>
         </div>

       </div>


      </div>

      </div>
        
            
    );
};

export default Routes;