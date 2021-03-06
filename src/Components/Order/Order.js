import React, { useState,useContext,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Order.css';
import { userContext } from '../../App';
import transports from '../../fakedata.json';
import Pricing from '../Pricing/Pricing';
import { Route, useHistory } from 'react-router';
import BuyStore from '../BuyStore/BuyStore';

const Order = () => {
  const {value,value4,value3} = useContext(userContext);

    const [loggedInUSer, setLoggedInUser] = value;
     console.log(loggedInUSer.email);

  
    const { register, handleSubmit, watch, errors } = useForm();
    const [newUser, setNewUser] = useState(false);

    const[orderedFruits,setOrderedFruits] = useState([]);
    let totalPrice = 0;
    useEffect(() => {
      (async function() {
          try {
              const response = await fetch(
                'https://rocky-savannah-23183.herokuapp.com/orderedProducts?email='+loggedInUSer.email);
              const json = await response.json();
              console.log(json);
              setOrderedFruits(json);
          } catch (e) {
              console.error(e);
          }
      })();
  }, []);
    

    {
      orderedFruits.map(fruit => {
        const pricing = parseFloat(fruit.price)
        totalPrice = totalPrice + pricing;
      })
  }
      
    return (
      <div>
      <h5 className="text-center text-primary pt-3">{loggedInUSer.name}, Below is list of your All order</h5>
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
            <h5 className="ms-auto">{totalPrice}</h5>
         </div>

       </div>
      </div>

      </div>
      </div>
            
    );
};

export default Order;