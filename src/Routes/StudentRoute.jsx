import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";


const StudentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation();
    if(loading || isStudentLoading){
        return <h1>Loading...</h1>
    }
    if(user && isStudent){
        return children;
    }
    return <Navigate to="/" state={{from : location}} replace></Navigate>
};

export default StudentRoute;