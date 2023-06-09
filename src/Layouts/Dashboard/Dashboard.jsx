import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineSound, AiOutlinePieChart } from "react-icons/ai";
import { BiDiamond, BiStats, BiBell } from "react-icons/bi";
import { HiOutlineClipboardList, HiOutlineMail } from "react-icons/hi";
import { IoMdBusiness } from "react-icons/io";
import { BsBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";


const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const [isStudent, isStudentLoading] = useStudent();
    
    const activeClass = "text-white bg-blue-700 shadow-lg py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    const inactiveClass = "py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    return (
        <div className="font-poppins container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* *************************************************************************************
                                                            Page content here 
                    ***************************************************************************************/}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side md:border-r">
                    <label htmlFor="my-drawer-2" className="drawer-overlay bg-black"></label>
                    <ul className="menu flex-nowrap my-6 px-4 w-60 h-full space-y-2 text-base-content">
                        {/* *********************************************************************************
                                                         Sidebar content here 
                        ***********************************************************************************/}
                        <h2 className="text-xl font-bold mb-4">Creative<span className="text-blue-700">Campers</span></h2>
                        <p className="px-3 py-2 text-xs">Admin Panel</p>
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
                                            <BiBell />
                                            Student Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-selected-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BiStats />
                                            My Selected Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-enrolled-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <IoMdBusiness />
                                            My Enrolled Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/payment"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlineSound />
                                            Payment
                                        </NavLink>
                                    </li>
                                </>
                                || isInstructor &&
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/instructor"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BiDiamond />
                                            Instructor Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/add-class"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <BsBoundingBox />
                                            Add a Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/my-classes"
                                            className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                            <AiOutlinePieChart />
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
                                            <HiOutlineClipboardList />
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
                                            <HiOutlineMail />
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