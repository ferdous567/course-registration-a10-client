import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const [brands, setBrands] = useState([]);

    const product = useLoaderData();

    
    
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const brand = form.brand_id.value;
        const shortDesc = form.shortDesc.value;
        const newProduct = {name,  type, price, rating, image, shortDesc, brand};
        
        console.log(newProduct)
        
        fetch(`http://localhost:5000/products/${product._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Update successfully !',
                    'success'
                  )
            }
        })

    }

    useEffect(() =>{
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => {
            setBrands(data)
        })
    }, [])
    return (
        <div className="bg-[#f4f3f0] p-10 w-3/4 mx-auto m-10">
            <h2 className="text-3xl font-extrabold text-center mb-10">Add Product</h2>
            <form onSubmit={handleUpdate} className="w-3/4 mx-auto">
                {/* row 1 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" defaultValue={product.name} placeholder="Product Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-8 mb-5">
                    <label className="label">
                            <span className="label-text">Brands</span>
                        </label>
                        <label className="input-group">
                            
                        <select className="w-full p-2" name="brand_id" id="" >
                            <option  value="">Select Brand</option>
                            
                            {
                                brands.map(brand => <option key={brand._id} 
                                    value={brand.brandName} selected = {brand.brandName == product.brand && 'selected'}>{brand.brandName}</option>)
                            }
                        </select>
                        </label>
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="type" defaultValue={product.type}  placeholder="Product Type" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="price" defaultValue={product.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex ">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="rating" defaultValue={product.rating} placeholder="Rating" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Short Descriptions</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="shortDesc" defaultValue={product.shortDesc} placeholder="Short Descriptions" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 4 */}
                <div className="md:flex ">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="image" defaultValue={product.image} placeholder="ImageURL" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* row 5 */}
                <div className="my-5 ">
                   
                    <button type="submit" className="btn btn-success w-full">Add Item</button>
                    
                </div>
            </form>
        </div>
    );
};

export default Update;