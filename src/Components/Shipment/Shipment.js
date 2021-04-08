import React, { useContext,useState,useEffect } from 'react';
import './Shipment.css'
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import Order from '../Order/Order';
import PopUp from '../PopUp/PopUp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import SimpleOrder from '../SimpleOrder/SimpleOrder';


const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { value, value3,value4 } = useContext(userContext);
    const [loggedInUSer, setLoggedInUser] = value;
    const [simpleOrder,setSimpleOrder] = value3;


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      
        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

    return (
        <div className="row d-flex  flex-sm-row-reverse">
            <div className="col-md-6">
                <h4 className="text-center pt-3"> Hello {loggedInUSer.name}, Your Order</h4>
                <SimpleOrder check={true}/>
            </div>

            <div className="col-md-5">
            <form className="ship-form" onSubmit={handleSubmit(handleClickOpen)}>
                <input name="name" defaultValue={loggedInUSer.name} ref={register({ required: true })} placeholder="Enter your Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={loggedInUSer.email} ref={register({ required: true })} placeholder="Enter your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="address" ref={register({ required: true })} placeholder="Enter your address" />
                {errors.address && <span className="error">Address is required</span>}

                <input name="number" ref={register({ required: true })} placeholder="Enter your Number" />
                {errors.number && <span className="error">number is required</span>}

                <input type="submit" value="Place Order"/>
            </form>
            </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Hello {loggedInUSer.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {
              <p> One {simpleOrder.fruitName} Order Placed Successfully </p>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
};

export default Shipment;