import useMyClasses from "../../../hooks/useMyClasses";
import MyClassesCard from "./MyClassesCard";


const MyClasses = () => {
    const [myClasses] = useMyClasses()
    console.log(myClasses)
    return (
        <div className="w-full p-8">
            <div>
                <h1>My Total Classes {myClasses.length}</h1>
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