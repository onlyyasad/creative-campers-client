import useAuth from "../../../hooks/useAuth";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";
import usePaymentHistory from "../../../hooks/usePaymentHistory";


const StudentDashboard = () => {
    const {user} = useAuth();
    const [selectedClasses] = useMySelectedClasses();
    const [enrolledClasses] = usePaymentHistory();
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Student Profile</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex gap-2 p-4 bg-[#F3FBFF] rounded-xl">
                    <div className="space-y-2">
                        <img className="h-28 rounded-md" src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                        <p className="text-xs">{user?.email}</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FEF5F8] rounded-xl">
                    
                    <div className="">
                        <p>Selected Classes</p>
                        <h2 className="text-4xl font-semibold">{selectedClasses?.length}</h2>
                        
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FFF0EC] rounded-xl">
                    
                    <div className="">
                        <p>Enrolled Classes</p>
                        <h2 className="text-4xl font-semibold">{enrolledClasses?.length}</h2>
                        
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FEF3FF] rounded-xl">
                    
                    <div className="">
                        <p>Payment Completed</p>
                        <h2 className="text-4xl font-semibold">{enrolledClasses?.length}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;