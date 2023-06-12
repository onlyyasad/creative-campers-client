import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineUserSwitch, AiOutlineSelect, AiOutlineUsergroupAdd, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiSelection, BiWallet } from "react-icons/bi";
import {  BsCheckSquare } from "react-icons/bs";
import { FiSettings, FiUser } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    
    const activeClass = "text-white bg-blue-700 shadow-lg py-2 hover:bg-blue-700 hover:text-white  duration-300 focus:bg-blue-700";
    const inactiveClass = "py-2 hover:bg-blue-700 hover:text-white duration-300 focus:bg-blue-700";
    return (
        <div className="font-poppins container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* *************************************************************************************
                                                            Page content here 
                    ***************************************************************************************/}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side md:border-r">
                    <label htmlFor="my-drawer-2" className="drawer-overlay bg-black"></label>
                    <ul className="menu flex-nowrap py-6 px-4 w-60 h-full bg-base-100 space-y-2 text-base-content">
                        {/* *********************************************************************************
                                                         Sidebar content here 
                        ***********************************************************************************/}
                        <p className="normal-case mb-4 text-xs"> <span className="font-bold text-xl">Creative</span><span className="text-blue-700 font-bold text-xl">Campers</span> <br /> by BlueDot Academy</p>
                        {
                            isAdmin && <p className="px-3 py-2 text-xs">Admin Panel</p> ||
                            isInstructor && <p className="px-3 py-2 text-xs">Instructor Panel</p> ||
                            isStudent && <p className="px-3 py-2 text-xs">Student Panel</p>
                        }
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineHome />
                                Home
                            </NavLink>
                        </li>
                        <>
                            {
                                isStudent &&
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/student"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <FaRegUser />
                                            Student Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-selected-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlineSelect />
                                            My Selected Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-enrolled-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BsCheckSquare />
                                            My Enrolled Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/payment-history"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BiWallet />
                                            Payment History
                                        </NavLink>
                                    </li>
                                </>
                                || isInstructor &&
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/instructor"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <FiUser />
                                            Instructor Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/add-class"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlineAppstoreAdd />
                                            Add a Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BiSelection />
                                            My Classes
                                        </NavLink>
                                    </li>
                                </>
                                || isAdmin &&
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/admin"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlineUserSwitch />
                                            Admin Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manage-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <FiSettings />
                                            Manage Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manage-users"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlineUsergroupAdd />
                                            Manage Users
                                        </NavLink>
                                    </li>
                                </>
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;