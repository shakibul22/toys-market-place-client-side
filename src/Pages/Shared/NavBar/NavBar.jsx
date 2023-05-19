import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    const navItems = <>
        <li><NavLink to='/' className='text-white'>Home</NavLink> </li>
        <li><NavLink to='/blog'  className='text-white'>Blog</NavLink> </li>
    </>
    return (
        <div className="navbar bg-cyan-900">
            <div className="navbar-start">
              <img src="https://cdn11.bigcommerce.com/s-bfc1cbi7hy/images/stencil/225x65/logo_1601701528__90522.original.png" alt="" />

              
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to='/login'> <button className="btn   text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;