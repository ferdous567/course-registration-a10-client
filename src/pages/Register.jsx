import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        setError('');
        setSuccess('');

        if(password.length < 6){
            setError('Password should be at least 6 charachter of longer')
        }

        else if(!/[A-Z]/.test(password)){

            console.log('password should be at least 1 uppercase and 1 digit .')
            setError('password should be at least 1 uppercase and 1  digit .')
            return;
        }
        else if(!/[0-9]/.test(password)){

            console.log('password should be at least  1 digit and one special charachter.')
            setError('password should be at least  1 digit .')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire(
                        'Good job!',
                        'Registration complete go to login!',
                        'success'
                    )
                )

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => setSuccess('Profile Updated'))
                .catch(error => setError(error.message))

                form.reset('')
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-10">Register Here</h2>
            <div className="card flex-shrink-0  w-[400px] mx-auto  shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
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
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Have an account? Please <Link to='/login'
                        className="text-blue-500 hover:underline">Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Register;