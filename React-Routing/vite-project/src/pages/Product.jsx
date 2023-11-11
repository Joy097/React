import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';

const Product = () => {
    let {id, name} = useParams()
    return (
        <div>
            <Menu/>
            <h1>Products</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default Product;