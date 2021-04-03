import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Loader from "react-loader-spinner";
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const AddProductd = (event) => {
  
  
    const classes = useStyles();
    const [addedproduct, setAddedProduct] = useState({
      fruitName:"",price:"",photoUrl:"",isBtnDisable:false
    });

    const setProductName =(event)=>{
        const newProdct = {...addedproduct}
          newProdct.fruitName = event.target.value
          setAddedProduct(newProdct)
    }

    const setProductPrice =(event)=>{
        const newProdct = {...addedproduct}
        newProdct.price =  event.target.value
        setAddedProduct(newProdct)
  

    }

    const handelImgUpload = (event)=>{
              // console.log(event.target.files[0]);
      const newProdct = {...addedproduct}
      newProdct.isBtnDisable = true
      setAddedProduct(newProdct)
      const imgData = new FormData()
      imgData.set('key','521a48086a6196794f555e8c9f24af19')
      imgData.append('image',event.target.files[0])
      axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        newProdct.isBtnDisable = false
      const newProdct2 ={...newProdct}
        setAddedProduct(newProdct2)
        // console.log(response.data.data.display_url);
        
        newProdct.photoUrl = response.data.data.display_url
        const newProdct3={...newProdct}
        setAddedProduct(newProdct3)
        //  image joto somy na ascha toto somy btn disable rakha khobe
     
      })
      .catch(function (error) {
        console.log(error);
      });


    }

    const productAdd = (event)=>{
        event.preventDefault();
        delete addedproduct.isBtnDisable;
        fetch('http://localhost:5000/addProduct',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(addedproduct)
        })
        
       
    }



    return (
        <div style={{ margin: '0px 20%' }}>
        <div style={{ margin: '0px 50px' }}>
            <form action="setProductName">

                <input onBlur={setProductName} placeholder='Enter fruits Name' required type="text" />
                <input onBlur={setProductPrice} placeholder='Enter fruits Price' required type="text" />

                <input onChange={handelImgUpload} type="file" name="" id="" />
                {
                    addedproduct.isBtnDisable && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />

                }
                <input type='submit' disabled={addedproduct.isBtnDisable} onClick={productAdd} value="Submit" />
            </form>
        </div>
    </div>

    );
};

export default AddProductd;