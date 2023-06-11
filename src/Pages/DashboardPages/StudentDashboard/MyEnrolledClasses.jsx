import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyEnrolledClasses = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolledClasses = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/payments/enrolledClasses?email=${user?.email}`)
            return response.data
        }
    })

    return (
        <div className="w-full">
            My Enrolled Classes {enrolledClasses.length}
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
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enrolledClasses.map((singleClass, idx) => <tr key={singleClass._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                        
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{singleClass.name}</div>
                                    </td>
                                    <td>${singleClass.price}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;