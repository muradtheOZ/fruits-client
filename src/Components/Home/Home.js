import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'
import transports from '../../fakedata.json'


const Home = () => {
    const [fruits, setFruits] = useState([]);


    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=m')
        .then(response => response.json())
        .then(data => setFruits(data.meals));
    },[])
    return (

     
        <div className="bg">   
                <div  className="row me-5 ms-5 customPadding">
                {
                    fruits.map(fruit => {
                        return <Card fruit={fruit}>
                        </Card>
                    })
                }
            </div>
          

        </div>
    );
};

export default Home;