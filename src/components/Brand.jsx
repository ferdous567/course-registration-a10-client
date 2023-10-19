// import { Link } from "react-router-dom";


import { useLoaderData } from "react-router-dom";
import SingleBrand from "./SingleBrand";


const Brand = ({brands}) => {
  
console.log(brands);
    
    return (

        <div>
            <h3 className="text-3xl text-center font-bold mt-10">Top Brands</h3>
            <div className="md:grid grid-cols-3 gap-6 my-10">
            
            {
                brands.map(item => <SingleBrand key={item._id} singleBrand={item}></SingleBrand>)
            }
        </div>
        </div>

       
    );
};

export default Brand;