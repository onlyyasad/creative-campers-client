
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import SelectedClassesTableRows from "./SelectedClassesTableRows";
import Swal from "sweetalert2";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";


const MySelectedClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [selectedClasses, refetch] = useMySelectedClasses()

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
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>My Selected Classes</h2>
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                selectedClasses?.map((singleClass, idx) => <SelectedClassesTableRows 
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