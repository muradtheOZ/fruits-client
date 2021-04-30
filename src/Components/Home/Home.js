import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import LoadSpin from '../LoadSpin/LoadSpin';
import './Home.css'



const Home = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch('https://rocky-savannah-23183.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setFruits(data)
                setLoading(false);
                console.log(data);

            });

    }, [])
    console.log("value of loading", loading);
    return (
        loading ?
            <div className="center center-text">
                <LoadSpin />
            </div>

            :
            <div className="bg">
                <div className="row me-5 ms-5 customPadding">
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