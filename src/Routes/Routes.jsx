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
import PaymentHistory from "../Pages/DashboardPages/StudentDashboard/PaymentHistory";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/student",
                element: <StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>
            },
            {
                path: "/dashboard/my-selected-classes",
                element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
            },
            {
                path: "/dashboard/my-enrolled-classes",
                element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <StudentRoute><Payment></Payment></StudentRoute>
            },
            {
                path: "/dashboard/payment-history",
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            {
                path: "/dashboard/instructor",
                element: <InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute>
            },
            {
                path: "/dashboard/add-class",
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: "/dashboard/my-classes",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "/dashboard/admin",
                element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
            {
                path: "/dashboard/manage-classes",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "/dashboard/manage-users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);