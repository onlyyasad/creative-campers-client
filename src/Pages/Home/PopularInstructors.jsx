import useLoadInstructors from "../../hooks/useLoadInstructors";
import InstructorsCard from "../Instructors/InstructorsCard";


const PopularInstructors = () => {
    const instructors = useLoadInstructors();
    const popularInstructors = instructors.slice(0,6);
    return (
        <div className="my-8">
            <h1 className="uppercase font-bold text-3xl my-8 text-center">Popular Instructors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                {
                    popularInstructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;