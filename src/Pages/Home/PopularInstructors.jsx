import useLoadInstructors from "../../hooks/useLoadInstructors";
import InstructorsCard from "../Instructors/InstructorsCard";


const PopularInstructors = () => {
    const instructors = useLoadInstructors();
    const popularInstructors = instructors.slice(0,6);
    return (
        <div className="container mx-auto my-8">
            <div className="my-8">
                <h1 className="uppercase font-bold text-3xl text-center">Popular Instructors</h1>
                <p className='text-black text-center'>Have a look at our popular instructors who are most popular among their students for their creative lessons.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                {
                    popularInstructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;