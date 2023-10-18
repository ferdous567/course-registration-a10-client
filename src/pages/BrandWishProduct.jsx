import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const BrandWishProduct = () => {
    const getBrand = useLoaderData();
    const [products, setProducts] = useState([])
    console.log(getBrand);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/brand-product/${getBrand?._id}`);
            const data = await res.json();
            setProducts(data);
        };
        fetchData();
    },[getBrand])
    console.log(products);
    return (
        <div className='m-10  md:w-11/12 mx-auto md:grid grid-cols-4 gap-4'>

           {
            products?.map(product => <ProductCard key={product?._id} product={product}></ProductCard> )
           }
            
        </div>
    );
};

export default BrandWishProduct;