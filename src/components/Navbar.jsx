import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>

    </>
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <Link to = '/' className="">
                        <span className="text-5xl font-bold text-sky-700 italic">F</span>
                        <span className="text-2xl font-extrabold text-orange-600 px-1 
                        underline">&</span>
                        <span className="text-4xl font-bold text-pink-700 italic">bev</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to = '/login'>
                        <button className="btn btn-outline btn-success">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;