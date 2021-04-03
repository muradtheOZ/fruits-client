import React, { useEffect, useState } from 'react';
import EditProduct from '../EditProduct/EditProduct';
// material ui grid
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Loader from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const ManageProduct = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(res=>setProducts(res))
    },[])
    return (
   

<div style={{margin:'0px 20%'}}>
<h3>this is home</h3>

<Grid container spacing={3}>

{
                products.map(product=> <EditProduct product={product}></EditProduct>)
            }
      </Grid>

        </div>
    );
};

export default ManageProduct;
