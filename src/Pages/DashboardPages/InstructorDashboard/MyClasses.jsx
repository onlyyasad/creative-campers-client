import useMyClasses from "../../../hooks/useMyClasses";
import MyClassesCard from "./MyClassesCard";


const MyClasses = () => {
    const [myClasses] = useMyClasses()
   
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>My Classes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    myClasses.map(myClass => <MyClassesCard key={myClass._id} myClass={myClass}></MyClassesCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;