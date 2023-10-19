import { Link } from "react-router-dom";

const SingleBrand = ({ singleBrand }) => {
    // console.log(singleBrand)
    const { _id,brandName, photourl } = singleBrand;
    return (
        <div >

           <div className="card bg-base-100 shadow-xl p-6">
                <figure><img className="h-[200px]" src={photourl} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/brand-product/${_id}`}>{brandName}</Link>
                    </h2>
                </div>
            </div>
        </div>


    );
};

export default SingleBrand;