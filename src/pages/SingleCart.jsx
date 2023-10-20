// import { Link, useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';

import Swal from 'sweetalert2';


const SingleCart = ({ cart, carts, setCarts }) => {
    

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )

                            const remaining = carts.filter(singleCart => singleCart._id !== _id)
                            setCarts(remaining)

                        }
                    })
            }
        })
    }

    // const carts = useLoaderData();

    const { _id, name, image, type, price, rating } = cart;

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

                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


SingleCart.propTypes = {
    cart: PropTypes.object,
    carts: PropTypes.function,
    setCarts: PropTypes.function

}
export default SingleCart;