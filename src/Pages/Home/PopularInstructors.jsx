import Marquee from "react-fast-marquee";
import Gradient from "rgt";
import useLoadInstructors from "../../hooks/useLoadInstructors";
import InstructorsCard from "../Instructors/InstructorsCard";

const PopularInstructors = () => {
  const instructors = useLoadInstructors();
  const popularInstructors = instructors.slice(0, 6);
  return (
    <div className="container mx-auto py-20">
      <div className="my-8">
        <h1
          data-aos="fade-right"
          className="uppercase mb-5 font-bold text-3xl text-center"
        >
          <Gradient dir="left-to-right" from="#06B6D4" to="#1D4ED8">
            {"Popular Instructors"}
          </Gradient>
        </h1>
        <p data-aos="fade-up" className="text-center">
          Have a look at our popular instructors who are most popular among
          their students for their creative lessons.
        </p>
      </div>

      <Marquee pauseOnHover={true}>
        <div className="flex gap-4 mr-4">
          {popularInstructors.map((instructor) => (
            <InstructorsCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorsCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PopularInstructors;
