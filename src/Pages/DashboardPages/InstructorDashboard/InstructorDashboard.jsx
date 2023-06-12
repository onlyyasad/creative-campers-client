
import useAuth from "../../../hooks/useAuth";
import useMyClasses from "../../../hooks/useMyClasses";


const InstructorDashboard = () => {
    const {user} = useAuth();
    const [myClasses] = useMyClasses();

    const approvedClasses = myClasses.filter(singleClass => singleClass.status === "approved");
    const deniedClasses = myClasses.filter(singleClass => singleClass.status === "denied");
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Instructor Profile</h2>
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
                        <p>Uploaded Classes</p>
                        <h2 className="text-4xl font-semibold">{myClasses?.length}</h2>
                        
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FFF0EC] rounded-xl">
                    
                    <div className="">
                        <p>Approved Classes</p>
                        <h2 className="text-4xl font-semibold">{approvedClasses?.length}</h2>
                        
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FEF3FF] rounded-xl">
                    
                    <div className="">
                        <p>Denied Classes</p>
                        <h2 className="text-4xl font-semibold">{deniedClasses?.length}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;