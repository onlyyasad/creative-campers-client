import { NavLink } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';


const NavBar = () => {
    const activeClass = "text-blue-700";
    const inactiveClass = "";

    const menuLi = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Instructors
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Classes
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Dashboard
            </NavLink>
        </li>

    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLi}
                    </ul>
                </div>
                <p className="normal-case text-xs"> <span className="font-bold text-xl">Creative</span><span className="text-blue-700 font-bold text-xl">Campers</span> <br /> by BlueDot Academy</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuLi}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-circle"><AiOutlineUser /></a>
                <button className="btn">Logout</button>
                <button className="btn">Login</button>
            </div>
        </div>
    );
};

export default NavBar;