import { Link, useLoaderData } from "react-router-dom";

const SingleCart = ({ cart }) => {

    const carts = useLoaderData();

    const {_id, name, image, type, price, rating } = cart;

    return (
        <div className="mb-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-end">
                        
                        <button className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;