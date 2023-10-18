import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-10">Login Here</h2>
            <div className="card flex-shrink-0  w-[400px] mx-auto  shadow-2xl bg-base-100">
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Do not have an account? Please <Link to = '/register' 
                    className="text-blue-500 hover:underline"> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;