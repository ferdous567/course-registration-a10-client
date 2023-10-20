import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCardDetails = () => {

    const product = useLoaderData();
    console.log(product)
    // const {id} = useParams();

    const { name, image, type, price, rating, brand, shortDesc } = product;

    const handleCart = () => {
        const newCart = { name, image, type, price, rating };
        console.log(newCart)

        fetch('https://food-bevarage-server-il07zob08-khaledas-projects.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Product added to cart successfully !',

                        'success'
                    )
                }
            })
    }


    return (
        <div className="w-3/4 mx-auto p-10 m-5 border bg-pink-50">

            <div>
                <p className="text-4xl font-bold text-center underline text-pink-600 mb-10">Product Name: {name}</p>
                <div className="md:flex justify-start ">
                    <div className="mr-20">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <p className="text-xl font-bold">Brand: {brand}</p>
                        <p>Type: {type}</p>
                        <p>Price: {price}</p>
                        <p className="">Rating : {rating}</p>
                        <p className="mb-2">Description : {shortDesc}</p>
                        <div className="">
                            <button onClick={handleCart} className="btn btn-outline btn-warning mb-5"
                            >Add to cart</button>
                            <Link to = '/myCart'>
                                <button className="btn btn-outline btn-secondary ml-5">See your Cart Items</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;