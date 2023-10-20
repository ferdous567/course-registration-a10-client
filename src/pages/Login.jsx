import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useState } from "react";


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { googleSignIn, signInWithEmail } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('');
        setSuccess('');


        signInWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                form.reset('')
                setSuccess(
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully logged in!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                )
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })

    }

    const hanldeGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-10">Login Here</h2>
            <div className="card flex-shrink-0  w-[400px] mx-auto  shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
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
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Do not have an account? Please <Link to='/register'
                        className="text-blue-500 hover:underline"> Register</Link></p>
                    <div className="text-center">
                        <h2 className="font-bold my-2">Or</h2>
                        <button onClick={hanldeGoogleSignIn} className="btn btn-outline btn-accent">Sign In With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;