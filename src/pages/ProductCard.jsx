
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product, getBrand }) => {


    // const { name, image, brand, type, price, rating, } = product;
    const { _id, name, image, type, price } = product;
    console.log(product)

    return (
        <div className="flex">


            {/* card section */}
            <div className=" mb-5 bg-pink-300 border rounded-xl p-8 flex-grow">
                <h2 className="text-2xl my-2">name : {name}</h2>
                <img className="h-[200px]" src={image} alt="" />
                <div className="mt-4">
                    <h2>Brand: {getBrand.brandName}</h2>
                    <h2>Type: {type}</h2>
                    <h2>Price: {price}</h2>
                    <h2>Ratings:
                        <div className="rating rating-sm ml-3">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-violet-500" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-violet-500"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-violet-500" checked/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-violet-500" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-violet-500" />
                        </div>
                    </h2>
                </div>
                <div className="">
                    <Link to={`/productCardDetails/${_id}`}>
                        <button className="btn btn-outline btn-secondary mt-3">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`} className="ml-4">
                        <button className="btn btn-outline btn-primary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


ProductCard.propTypes = {
    product: PropTypes.array,
    getBrand: PropTypes.array

}
export default ProductCard;