import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './EditProduct.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
const EditProduct = (props) => {
    const {name,photoUrl,features,price,_id} =props.product

    const deleteProduct =(event)=>{
  //  console.log(event.target.value);
          fetch(`https://rocky-savannah-23183.herokuapp.com/delete/${_id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
        .then(data=>
        console.log(data)
      )
      console.log('hello button clicked')
    }
    return (
        <Grid item xs={12} sm={12} md={12} >
        <Paper style={{height:'100px'}} className='container'>
    
        <img className='ProductImg' src={photoUrl} alt=""/>
        <h4 className='product Name'>{name}</h4>
        <p className='product Price'> {price}</p>

  <div className="btn">
 
    <button onClick={deleteProduct} className='button' value={_id}>Delete</button>
  </div>
        </Paper>
      </Grid>
    );
};

export default EditProduct;
