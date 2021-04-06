import React, { useContext, useState } from 'react';
import './Card.css'
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';


const Card = (props) => {
    const { value, value2 } = useContext(userContext);
    const [transportMode, setTransportMode] = value2;
    const [loggedInUSer, setLoggedInUser] = value;

    const { fruitName, price, photoUrl, _id } = props.fruit;
    

    //Route change and transport mode set
    const history = useHistory()
    const handleSingleProduct = (event) => {
        history.push(`/fruits/${_id}`);
    }



    return (

        <div className="col-lg-3 col-md-6 p-4">

            <div className="card">
                <img className="card-img-top p-2 m-2 custom-img" src={photoUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{fruitName}</h5>
                </div>
                <div className="card-body d-flex">
                    <h3 className="card-link pe-3">${price}</h3>
                    <button type="button" className="btn btn-warning pe-3  ms-5 ps-3 " onClick={handleSingleProduct}> Buy Now</button>

                </div>
            </div>

        </div>

    );
};

export default Card;
