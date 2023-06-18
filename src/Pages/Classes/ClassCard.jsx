import CountUp from "react-countup";
import {
  HiOutlineBookOpen,
  HiOutlineViewGrid,
  HiOutlineViewGridAdd,
} from "react-icons/hi";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassCard = ({ singleClass, handleSelectClass }) => {
  const {
    name,
    price,
    instructor_name,
    instructor_email,
    lessons,
    available_seats,
    image,
    enrolled,
  } = singleClass;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div data-aos="fade-right" className={`card  bg-base-100 `}>
      <figure className="flex-grow rounded-none h-[180px]">
        <img className="w-full" src={image} alt="Album" />
      </figure>
      <div className="card-body px-0">
        <h2 className="font-bold">{name}</h2>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-gray-500 w-full p-2 text-sm ">
            <p className="">
              By <span className="font-normal">{instructor_name}</span>
            </p>
            <p className="">
              <span className="font-normal">{instructor_email}</span>
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-warning">${price}</h2>
        </div>
        {/* <div className="flex-grow">
          <p className="text-sm text-gray-500">{details}</p>
        </div> */}
        <div className="flex justify-between items-center">
          <div className="flex bg-base-300 p-2 flex-grow items-center gap-2">
            <p className="border-e-2 text-sm border-e-base-200 pe-2">
              <HiOutlineBookOpen className="text-xl" /> Lessons
            </p>
            <p className="text-xl">
              <CountUp end={lessons} />
            </p>
          </div>
          <div className="flex bg-base-200 p-2 flex-grow items-center gap-2">
            <p className="border-e-2 text-sm pe-2">
              <HiOutlineViewGrid className="text-xl" /> Available Seats
            </p>
            <p className={`text-xl ${available_seats === 0 && "text-red-600"}`}>
              <CountUp end={available_seats} />
            </p>
          </div>
          <div className="flex bg-base-300 p-2 flex-grow items-center gap-2">
            <p className="border-e-2 text-sm border-e-base-200 pe-2">
              <HiOutlineViewGridAdd className="text-xl" />
              Enrolled
            </p>
            <p className="text-xl">
              <CountUp end={enrolled} />
            </p>
          </div>
        </div>

        <div className="card-actions flex-nowrap mt-4">
          <button className="btn btn-xs btn-warning rounded-xl">Details</button>
          <button
            onClick={() => handleSelectClass(singleClass)}
            className={`btn btn-xs normal-case bg-blue-700 text-white hover:text-blue-700 rounded-xl ${
              (available_seats === 0 &&
                "btn-disabled bg-red-300 border-red-300 text-gray-500") ||
              (isAdmin &&
                "btn-disabled bg-base-200 border-base-200 text-gray-500") ||
              (isInstructor &&
                "btn-disabled bg-base-200 border-base-200 text-gray-500")
            }`}
          >
            Select to Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
