import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";

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
            }
        ]
    },
]);