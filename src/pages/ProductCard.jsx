
const ProductCard = ({ product }) => {
    // const { name, image, brand, type, price, rating, } = product;
    const {name, image, type, price} = product;

    return (
        <div className="bg-pink-300 border rounded-xl p-8">
            <h2 className="text-2xl my-2">name : {name}</h2>
            <img className="h-[200px]" src={image} alt="" />
          <div className="mt-4">
          <h2>Type: {type}</h2>
          <h2>Price: {price}</h2>
          </div>
            {/* <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} -{brand}</h2>
                    <p>Type :  , Price: </p>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductCard;