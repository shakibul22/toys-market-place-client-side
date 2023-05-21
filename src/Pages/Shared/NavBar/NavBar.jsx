import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../Providers/AuthProvider";
import OfferPage from "../../Home/ReviewPage/ReviewPage";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };


    return (


        <div className="navbar bg-cyan-900">

            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/' className='text-blue-300'>Home</NavLink> </li>
                    <li><NavLink to='/blog' className='text-blue-300'>Blog</NavLink> </li>
                    <li><NavLink to='/addToy' className='text-blue-300'>Add Toy</NavLink> </li>
                    <li><NavLink to='/myToys' className='text-blue-300'>My Toys</NavLink> </li>
                    <li><NavLink to='/allToys' className='text-blue-300'>All Toys</NavLink> </li>

                </ul>
            </div>
            <div className="navbar-start">
                <img src="https://cdn11.bigcommerce.com/s-bfc1cbi7hy/images/stencil/225x65/logo_1601701528__90522.original.png" alt="" />


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className='text-white'>Home</NavLink> </li>
                    <li><NavLink to='/blog' className='text-white'>Blog</NavLink> </li>
                    <li><NavLink to='/addToy' className='text-white'>Add Toy</NavLink> </li>
                    <li><NavLink to='/myToys' className='text-white'>My Toys</NavLink> </li>
                    <li><NavLink to='/allToys' className='text-white'>All Toys</NavLink> </li>


                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>{user.displayName}</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div> : <Link to='/login'> <button className="btn   text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Login</button></Link>}

            </div>
        </div>
    );
};

export default NavBar;

