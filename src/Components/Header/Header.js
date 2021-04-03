
import React, { useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const {value,value2} = useContext(userContext);
    let name;

    const [loggedInUSer, setLoggedInUser] = value;
    const[transportMode,setTransportMode] = value2;
    
    //conditional user name for login button
    loggedInUSer.name?
     name = loggedInUSer.name
    :
    name = loggedInUSer.displayName
    
    //direct destination click default mode selecting as car for empty transport mode and routing
    const history =  useHistory()
    const showRoute =()=>{
        if(transportMode === ''){
            setTransportMode('car');
        }
           
        history.push('/routes')
    }


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
                        <Link onClick={showRoute} class="nav-link ps-4 pe-4">Product</Link>
                        <Link class="nav-link ps-4 pe-4" to="/shipment">checkout</Link>
                        <Link class="nav-link ps-4 pe-4" to="/admin">Admin</Link>
                        <Link class="nav-link ps-4 pe-4" to="/login">{name?name:'Login'}</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;