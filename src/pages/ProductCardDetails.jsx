import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCardDetails = () => {

    const product = useLoaderData();
    console.log(product)
    // const {id} = useParams();
    
   const {name, image, type, price, rating} = product;
    
   const handleCart = () =>{
    const newCart = {name, image, type, price, rating};
    console.log(newCart)

    fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully !',
                    'success'
                  )
            }
        })
   }
   

    return (
        <div>
            <h3>product details page.</h3>
            <p>Product Name: {name}</p>
            <p><img src={image} alt="" /></p>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
            <p>Rating : {rating}</p>
            <button onClick={handleCart} className="btn btn-outline btn-warning">Add to cart</button>
        </div>
    );
};

export default ProductCardDetails;