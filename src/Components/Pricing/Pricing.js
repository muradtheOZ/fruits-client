
import React, { useState,useContext } from 'react';
import { userContext } from '../../App';
import transports from '../../fakedata.json'
import './Pricing.css'

const Pricing = (props) => {
    
    const {value,value2,value3} = useContext(userContext);
    const [loggedInUSer, setLoggedInUser] = value;
    const[transportMode,setTransportMode] = value2;
    const [transportInfo,seTTransportInfo] = value3;
    const{departure,destination,date} = transportInfo;
    console.log('Transport from pricing', transportInfo)

    const transportDetails = transports.filter( (transport) => {
        return transport.type === transportMode; 
      });
      const{image,type,transport1, transport2,transport3,transport4,pepIcon} = transportDetails[0];
      console.log('show my info',type);
    return (
        <div className="row  d-flex">
            <div className="col-lg-4 col-md-12 bg-ash m-3 card custom-row ">
           <h3>{departure}</h3> 
           <h3>{destination}</h3> 
           <h3>{date}</h3> 

        <div className="row m-2 mb-2 card">
            <div className="col-md-12 me-auto d-flex">
            <img className="carIcon p-2" src={image} alt=""/>
            <p className="p-2">{type}</p>
            <img className="peepIcon mt-2" src={pepIcon} alt=""/>
            <p className=" mt-2">{transport1?.people}</p>
                
            <div className="col-md-6 ms-5 d-flex">
            <p className="p-2">${transport1?.cost}</p>
            </div>
            </div> 
        </div>

        <div className="row  m-2 mb-2  card">
            <div className="col-md-12 me-auto d-flex">
            <img className="carIcon p-2" src={image} alt=""/>
            <p className="p-2">{type}</p>
            <img className="peepIcon mt-2" src={pepIcon} alt=""/>
            <p className=" mt-2">{transport2?.people}</p>

            <div className="col-md-6 ms-5 d-flex">
            <p className="p-2">${transport2?.cost}</p>
            </div>
            </div> 
        </div>

        {
          transport3&& 
          <div className="row  m-2 mb-2  card">
            <div className="col-md-12 me-auto d-flex">
            <img className="carIcon p-2" src={image} alt=""/>
            <p className="p-2">{type}</p>
            <img className="peepIcon mt-2" src={pepIcon} alt=""/>
            <p className=" mt-2">{transport3?.people}</p>

            <div className="col-md-6 ms-5 d-flex">
            <p className="p-2">${transport3?.cost}</p>
            </div>
            </div> 
        </div>
        }

        {transport4&&
            <div className="row  m-2 mb-2  card">
            <div className="col-md-12 me-auto d-flex">
            <img className="carIcon p-2" src={image} alt=""/>
            <p className="p-2">{type}</p>
            <img className="peepIcon mt-2" src={pepIcon} alt=""/>
            <p className=" mt-2">{transport4?.people}</p>

            <div className="col-md-6 ms-5 d-flex">
            <p className="p-2">${transport4?.cost}</p>
            </div>
            </div> 
        </div>
        }

        </div>
        <div className=" col-lg-7 me-auto p-5 col-md-12 ">
        </div>

        </div>
        
    );
};

export default Pricing;