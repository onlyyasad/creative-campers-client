import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TableRows from "./TableRows";
import axios from "axios";
import Swal from "sweetalert2";


const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleMakeInstructor = async (email, name) => {
        console.log(email)
        const res = await axios.patch(`http://localhost:5000/users/role/${email}`, { role: "instructor" })
        const data = res.data;
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `${name} is instructor now!`,
                showConfirmButton: false,
                timer: 1500
            })
        }
        console.log(data)
    }
    const handleMakeAdmin = async (email, name) => {
        console.log(email)
        const res = await axios.patch(`http://localhost:5000/users/role/${email}`, { role: "admin" })
        const data = res.data;
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `${name} is admin now!`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className="w-full">
            <h1>Total Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, idx) => <TableRows key={user._id} user={user} idx={idx} handleMakeInstructor={handleMakeInstructor} handleMakeAdmin={handleMakeAdmin}></TableRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;