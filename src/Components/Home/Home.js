import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import LoadSpin from '../LoadSpin/LoadSpin';
import './Home.css'



const Home = () => {
    const [fruits, setFruits] = useState([]);


<<<<<<< HEAD
    useEffect(() =>{
        fetch('https://rocky-savannah-23183.herokuapp.com/products')
        .then(response => response.json())
        .then(data =>{
            setFruits(data)
            console.log(data);
        });
    },[])
=======
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                setFruits(data)
                console.log(data);
            });
    }, [])
>>>>>>> second-branch
    return (
        fruits[0] ?
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
            :
                <div className="center center-text">
                    <LoadSpin />
                </div>



    );
};

export default Home;