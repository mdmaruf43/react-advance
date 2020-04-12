import React from 'react';
import Categries from '../Catagory/Catagory';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>This is Home: {category}</h1>
            <Categries/>
        </div>
    );
};

export default Home;