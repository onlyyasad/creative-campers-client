import axios from "axios";
import useClasses from "../../../hooks/useClasses";
import ManageClassesCard from "./ManageClassesCard";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    

    const handleClassStatus = async(status, id) =>{
        console.log(status, id)
        const res = await axios.patch(`http://localhost:5000/classes/status/${id}`, { status: status })
        const data = res.data;
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `${status === "approved" ? "Approved!" : "Denied! Now leave a feedback!"}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    
    return (
        <div className="w-full p-8 space-y-4">
            Total Classes: {classes.length}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes?.map(singleClass => <ManageClassesCard key={singleClass?._id} singleClass={singleClass} handleClassStatus={handleClassStatus}></ManageClassesCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;