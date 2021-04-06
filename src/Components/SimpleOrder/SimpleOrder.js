import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SimpleOrder.css';
import { userContext } from '../../App';
import Pricing from '../Pricing/Pricing';
import { Route, useHistory, useParams } from 'react-router';

const SimpleOrder = () => {
    const {value,value2,value3,value4} = useContext(userContext);
    const [loggedInUSer, setLoggedInUser] = value;
    const [orderedFruits,setOrderedFruits] = value4;

    const {_id} = useParams(); 
    useEffect(() =>{
        fetch(`https://rocky-savannah-23183.herokuapp.com/fruits/${_id}`)
        .then(res=>res.json())
        .then(result=>{
            const {fruitName,photoUrl,price} =result[0]
            console.log(result[0]);
            let newProduct = {...orderedFruits}
            newProduct.fruitName =fruitName
            newProduct.price =price
            newProduct.photoUrl =photoUrl
            newProduct.BuingDate =new Date()
            setOrderedFruits(newProduct)
        })
    },[])

    const history = useHistory()
    const handleCheckOut = () => {
        const userAddedProduct = {...orderedFruits,...loggedInUSer}
        fetch('https://rocky-savannah-23183.herokuapp.com/addProductUser',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(userAddedProduct)
        })

        history.push('/shipment')
    }
    return (
        
        orderedFruits.fruitName?
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
                        <h5>{orderedFruits.fruitName}</h5>
                    </div>

                    <div className="col-md-5 d-flex">
                        <h5>1</h5>
                        <h5 className="ms-auto">{orderedFruits.price}</h5>
                    </div>

                </div>

                <div className="row custom pt-2 mt-2">
                    <div className="col-md-6">
                        <h5>Total</h5>
                    </div>

                    <div className="col-md-5 d-flex">
                        <h5 className="ms-auto">{orderedFruits.price}</h5>
                    </div>

                </div>

                <button onClick={handleCheckOut}>Check Out</button>
            </div>

        </div>
        :
        <h1>You didn't add any product</h1>
        
    );
};

export default SimpleOrder;