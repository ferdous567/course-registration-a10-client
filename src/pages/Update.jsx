import { Link } from "react-router-dom";

const Update = () => {
    return (
        <div className="bg-[#f4f3f0] p-10 w-3/4 mx-auto m-10">
            <h2 className="text-3xl font-extrabold text-center mb-10">Add Product</h2>
            <form className="w-3/4 mx-auto">
                {/* row 1 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Product Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="type" placeholder="Product Type" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex ">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="rating" placeholder="Rating" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-8 mb-5">
                        <label className="label">
                            <span className="label-text">Short Descriptions</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="shortDesc" placeholder="Short Descriptions" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 4 */}
                <div className="md:flex ">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="image" placeholder="ImageURL" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* row 5 */}
                <div className="my-5 ">
                    <Link>
                    <button className="btn btn-success w-full">Add Item</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Update;