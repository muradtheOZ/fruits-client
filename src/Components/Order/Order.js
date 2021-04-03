import React, { useState,useContext,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Route.css';
import { userContext } from '../../App';
import transports from '../../fakedata.json';
import Pricing from '../Pricing/Pricing';
import { Route, useHistory } from 'react-router';
import BuyStore from '../BuyStore/BuyStore';

const Order = () => {
  const {value,value2,value3} = useContext(userContext);

    const [loggedInUSer, setLoggedInUser] = value;
    const[transportMode,setTransportMode] = value2;
    const [transportInfo,seTTransportInfo] = value3;
     console.log(loggedInUSer.email);

  
    const { register, handleSubmit, watch, errors } = useForm();
    const [newUser, setNewUser] = useState(false);

    const[orderedFruits,setOrderedFruits] = useState([]);
    
    const history =  useHistory()
    const handleCheckOut = (props)=>{

      history.push('/shipment')
    }
    
    
      useEffect(() =>{
        fetch('http://localhost:5000/orderedProducts?email='+loggedInUSer.email)
        .then(response => response.json())
        .then(data =>{
            setOrderedFruits(data)
            console.log(data);
        });

        
    },[])
      
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
       {
                    orderedFruits.map(fruit => {
                        return <BuyStore fruit={fruit}>
                        </BuyStore>
                    })
                }

       </div>

       <div className="row custom pt-2 mt-2">
       <div className="col-md-6">
            <h5>Total</h5>
         </div>

         <div className="col-md-5 d-flex">
            <h5 className="ms-auto">{orderedFruits[0]?.price}</h5>
         </div>

       </div>
              
                <button onClick={() =>handleCheckOut(orderedFruits)}>Check Out</button>
      </div>

      </div>
        
            
    );
};

export default Order;