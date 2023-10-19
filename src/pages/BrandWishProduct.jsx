import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const BrandWishProduct = () => {
    const getBrand = useLoaderData();

    const [products, setProducts] = useState([])
    
    console.log(getBrand);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/brand-product/${getBrand?.brandName}`);
            const data = await res.json();
            setProducts(data);
        };
        fetchData();
    }, [getBrand])

    if(products.length === 0){
        console.log('no item found')
     }
    return (
        <div>
            <div className='m-10'>
                <Link to='/'>
                    <button className="btn btn-outline btn-ghost">Go to Home page</button>
                </Link>
            </div>
            <div>
                {/* slider */}

                <div className="carousel md:w-2/3 md:ml-44 h-[350px]  my-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEUH6ED7bWJeLbAOdJoe1bkk8VdH6oKOjrg&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSZ-hAUhG-X8m66x-YlKD3OzMiSNSaD2qoA&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSdmllqeUIbx-3c8MquTdd2GcTr2PCzslDA&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7HXaWBanS7rzRwXUIilCv37mUtNfkrafig&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>

           
                
                {
                    (products.length !== 0) ?  <div className='m-10  md:w-11/12 mx-auto md:grid grid-cols-4 gap-4 '>
                    {
                    products?.map(product => <ProductCard getBrand={getBrand} key={product?._id} product={product}></ProductCard>) 
                    } </div>
                    : <div className='w-1/2 mx-auto'>
                    <h2 className='text-5xl text-center font-bold text-red-600'>No items found</h2>
                    </div>
                }

            
        </div>
    );
};

export default BrandWishProduct;