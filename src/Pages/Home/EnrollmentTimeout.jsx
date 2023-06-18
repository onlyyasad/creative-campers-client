import { useTimer } from "react-timer-hook";
import Gradient from "rgt";
import sectionTop from "../../assets/sectionTop.svg";

const EnrollmentTimeout = () => {
  const time = new Date("2023-7-8");
  time.setHours(time.getHours() + 2);
  const expiryTimestamp = time;

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div
      style={{
        backgroundImage: `url(${sectionTop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center pt-32 md:min-h-full">
          <h1
            data-aos="fade-right"
            className="mb-5 text-3xl text-warning font-bold"
          >
            <Gradient dir="left-to-right" from="#06B6D4" to="#1D4ED8">
              {"Enrollment Ends At"}
            </Gradient>
          </h1>
          <p data-aos="fade-up" className="">
            Enroll to your favorite classes before the time ends and seat
            availability becomes zero
          </p>
          <div
            data-aos="fade-right"
            className="grid pt-10 grid-flow-col justify-center gap-5 text-center auto-cols-max"
          >
            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown text-5xl">
                <span style={{ "--value": days }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown text-5xl">
                <span style={{ "--value": hours }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown text-5xl">
                <span style={{ "--value": minutes }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown text-5xl">
                <span style={{ "--value": seconds }}></span>
              </span>
              sec
            </div>
          </div>

          <button
            data-aos="fade-up"
            className="py-4 px-10 mt-8 btn normal-case btn-warning font-bold duration-500 rounded-[50px]  "
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTimeout;
