import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import SelectedClassesTableRows from "./SelectedClassesTableRows";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([])

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            setClasses(response.data)
            return response.data
        }
    })

    const handleDeleteSelectedClass = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selectedClasses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
            My Selected Classes: {classes.length}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                classes?.map((singleClass, idx) => <SelectedClassesTableRows 
                                key={singleClass._id} 
                                singleClass={singleClass} 
                                idx={idx} 
                                handleDeleteSelectedClass={handleDeleteSelectedClass}
                                ></SelectedClassesTableRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClasses;