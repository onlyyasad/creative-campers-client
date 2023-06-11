import useLoadInstructors from "../../hooks/useLoadInstructors";
import PageBanner from "../Shared/PageBanner";
import InstructorsCard from "./InstructorsCard";


const Instructors = () => {
    const instructors = useLoadInstructors()
    console.log(instructors)
    return (
        <div className="">
            <PageBanner></PageBanner>
            <div>
                <h1 className="uppercase font-bold text-3xl my-8 text-center">Our Instructors</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
                    {/* Card 1 */}
                    {
                        instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;