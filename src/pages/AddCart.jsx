import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";

const AddCart = () => {

    const allCarts = useLoaderData();
    console.log(allCarts)

    return (
        <div>
            <h3 className="text-4xl text-center font-bold my-10">My Cart Items : {allCarts.length}</h3>
            <div className="w-3/4 mx-auto ">
                {
                    allCarts.map(cart => <SingleCart key={cart._id} cart={cart}></SingleCart>)
                }
            </div>
        </div>
    );
};

export default AddCart;