import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";
import { useState } from "react";

const AddCart = () => {

    const allCarts = useLoaderData();

    const [carts, setCarts] = useState(allCarts);

    console.log(allCarts)

    return (
        <div>
            <h3 className="text-4xl text-center font-bold my-10">My Cart Items : {carts.length}</h3>
            <div className="w-3/4 mx-auto ">
                {
                    carts.map(cart => <SingleCart key={cart._id} 
                        cart={cart} carts = {carts} setCarts = {setCarts}
                        ></SingleCart>)
                }
            </div>
        </div>
    );
};

export default AddCart;