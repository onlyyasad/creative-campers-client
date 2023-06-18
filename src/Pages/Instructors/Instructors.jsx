import bannerImg from "../../assets/instructor.svg";
import sectionTop from "../../assets/sectionTop.svg";
import useLoadInstructors from "../../hooks/useLoadInstructors";
import PageBanner from "../Shared/PageBanner";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
  const instructors = useLoadInstructors();

  const bannerTitle = "Creative Instruction";
  const bannerTag =
    "At CreativeCampers, our expert instructors inspire and nurture young minds through innovative and engaging teaching methods. We unlock artistic potential, foster imagination, and develop critical thinking skills. With hands-on learning and personalized guidance, campers explore various mediums, fostering self-expression and confidence. Join us and unleash your creativity with our creative instruction.";
  return (
    <div>
      <PageBanner
        bannerImg={bannerImg}
        bannerTitle={bannerTitle}
        bannerTag={bannerTag}
      ></PageBanner>
      <div
        style={{
          backgroundImage: `url(${sectionTop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
            {instructors.map((instructor) => (
              <InstructorsCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
