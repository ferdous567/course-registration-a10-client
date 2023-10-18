import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-10">Register Here</h2>
            <div className="card flex-shrink-0  w-[400px] mx-auto  shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Have an account? Please <Link to = '/login' 
                    className="text-blue-500 hover:underline">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;