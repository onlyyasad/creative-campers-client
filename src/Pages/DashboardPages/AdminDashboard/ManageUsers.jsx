import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user => <div className="flex gap-4" key={user._id}><h1>{user?.name}</h1><p>{user.email}</p><p>{user.role}</p></div>)
            }
        </div>
    );
};

export default ManageUsers;