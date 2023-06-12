import usePaymentHistory from "../../../hooks/usePaymentHistory";

const MyEnrolledClasses = () => {
    const [enrolledClasses] = usePaymentHistory();

    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>My Enrolled Classes</h2>
            </div>
            <div>
                <div className="overflow-x-auto flex items-center max-w-sm md:max-w-md lg:max-w-full rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-warning">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enrolledClasses.map((singleClass, idx) =>
                                    <tr key={singleClass._id}>
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