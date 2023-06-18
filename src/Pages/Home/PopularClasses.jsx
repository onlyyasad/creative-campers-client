import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gradient from "rgt";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import ClassCard from "../Classes/ClassCard";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://assignment-12-server-psi-three.vercel.app/classes/popular")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  const handleSelectClass = (singleClass) => {
    const { _id, name, price, image } = singleClass;
    console.log(singleClass);
    const selectedClass = {
      classId: _id,
      name,
      image,
      price,
      email: user?.email,
    };
    if (user) {
      axios
        .post(
          "https://assignment-12-server-psi-three.vercel.app/selectedClasses",
          selectedClass
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire(
              "Good job!",
              "Selected! Now please pay to confirm enroll!",
              "success"
            );
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 403) {
            Swal.fire("Already selected or enrolled!");
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="container mx-auto pb-20">
        <div className="my-8">
          <h1
            data-aos="fade-right"
            className="uppercase mb-5 font-bold text-3xl text-center"
          >
            <Gradient dir="left-to-right" from="#06B6D4" to="#1D4ED8">
              {"Popular Classes"}
            </Gradient>
          </h1>
          <p data-aos="fade-up" className="text-center">
            Here are the popular classes based on the students enrolled to each
            class.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {popularClasses.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
              handleSelectClass={handleSelectClass}
            ></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
