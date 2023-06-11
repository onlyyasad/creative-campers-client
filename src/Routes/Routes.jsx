import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import StudentDashboard from "../Pages/DashboardPages/StudentDashboard/StudentDashboard";
import MySelectedClasses from "../Pages/DashboardPages/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/DashboardPages/StudentDashboard/MyEnrolledClasses";
import Payment from "../Pages/DashboardPages/StudentDashboard/Payment";
import InstructorDashboard from "../Pages/DashboardPages/InstructorDashboard/InstructorDashboard";
import AdminDashboard from "../Pages/DashboardPages/AdminDashboard/AdminDashboard";
import ManageClasses from "../Pages/DashboardPages/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/DashboardPages/AdminDashboard/ManageUsers";
import AddClass from "../Pages/DashboardPages/InstructorDashboard/AddClass";
import MyClasses from "../Pages/DashboardPages/InstructorDashboard/MyClasses";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registration",
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/student",
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: "/dashboard/my-selected-classes",
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: "/dashboard/my-enrolled-classes",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>
            },
            {
                path: "/dashboard/instructor",
                element: <InstructorDashboard></InstructorDashboard>
            },
            {
                path: "/dashboard/add-class",
                element: <AddClass></AddClass>
            },
            {
                path: "/dashboard/my-classes",
                element: <MyClasses></MyClasses>
            },
            {
                path: "/dashboard/admin",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "/dashboard/manage-classes",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "/dashboard/manage-users",
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: "*",
        element: <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-center text-5xl text-red-400 font-poppins">404 Error</h1>
        </div>
    }
]);