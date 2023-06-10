import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import SelectedClassesTableRows from "./SelectedClassesTableRows";


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
                                classes?.map((singleClass, idx) => <SelectedClassesTableRows key={singleClass._id} singleClass={singleClass} idx={idx}></SelectedClassesTableRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClasses;