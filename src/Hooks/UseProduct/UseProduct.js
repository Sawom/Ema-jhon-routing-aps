import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseProduct = () => {
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products];
};
export default UseProduct;