import React from 'react';

const BuyStore = (props) => {
    
    const {fruitName, price} = props.fruit;

    return (
        <div className="row">
        <div className="col-md-6">
        <h5>{fruitName}</h5>
          </div>
 
          <div className="col-md-5 d-flex">
              <h5>1</h5>
             <h5 className="ms-auto">{price}</h5>
          </div>
          </div>
          
    );
};

export default BuyStore;