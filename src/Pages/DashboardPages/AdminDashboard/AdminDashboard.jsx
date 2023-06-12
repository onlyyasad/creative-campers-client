import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";


const AdminDashboard = () => {
    const {user} = useAuth();
    const [classes] = useClasses();

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const approvedClasses = classes.filter(singleClass => singleClass.status === "approved");
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Admin Profile</h2>
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
                        <h2 className="text-4xl font-semibold">{classes?.length}</h2>

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
                        <p>Total Users</p>
                        <h2 className="text-4xl font-semibold">{users?.length}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;