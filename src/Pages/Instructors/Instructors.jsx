import useLoadInstructors from "../../hooks/useLoadInstructors";
import PageBanner from "../Shared/PageBanner";
import InstructorsCard from "./InstructorsCard";
import bannerImg from "../../assets/instructor.svg"


const Instructors = () => {
    const instructors = useLoadInstructors()
    console.log(instructors)
    const bannerTitle = "Creative Instruction";
    const bannerTag = "At CreativeCampers, our expert instructors inspire and nurture young minds through innovative and engaging teaching methods. We unlock artistic potential, foster imagination, and develop critical thinking skills. With hands-on learning and personalized guidance, campers explore various mediums, fostering self-expression and confidence. Join us and unleash your creativity with our creative instruction."
    return (
        <div className="">
            <PageBanner bannerImg={bannerImg} bannerTitle={bannerTitle} bannerTag={bannerTag}></PageBanner>
            <div className="container mx-auto py-12">
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