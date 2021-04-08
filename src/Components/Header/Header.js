
import React, { useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const {value,value4} = useContext(userContext);
    let name;

    const [loggedInUSer, setLoggedInUser] = value;
    
    //conditional user name for login button
    loggedInUSer.name?
     name = loggedInUSer.name
    :
    name = loggedInUSer.displayName
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <Link class="navbar-brand active ps-4 pe-4" to="/home" aria-current="page" >Fruity Love</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto me-5 ps-4 pe-4 mb-2 mb-lg-0">
                        <Link class="nav-link active ps-4 pe-4" to="/home" aria-current="page" >Home</Link>
                        <Link class="nav-link ps-4 pe-4"  to="/order">Order</Link>
                        <Link class="nav-link ps-4 pe-4" to="/shipment/:_id">checkout</Link>
                        <Link class="nav-link ps-4 pe-4" to="/admin">Admin</Link>
                        <Link class="nav-link ps-4 pe-4" to="/login">{name?name:'Login'}</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;