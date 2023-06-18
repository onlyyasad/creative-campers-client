import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import Gradient from "rgt";

const InstructorsCard = ({ instructor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  const { name, email, photoURL } = instructor;
  return (
    <div
      data-aos="fade-right"
      className="relative w-full bg-base-100 "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img className="w-full" src={photoURL} alt="instructor" />
      <div
        className={`p-2 absolute w-full bg-base-100 bottom-0  ${
          isHovered
            ? "opacity-90 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        }`}
      >
        <h2 className="card-title text-center">
          <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
            {name}
          </Gradient>
        </h2>
        <p className="flex text-center items-center gap-2">
          <HiOutlineMail /> {email}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-warning w-full normal-case">
            View Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
