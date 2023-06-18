import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bannerImg from "../../assets/class.svg";
import useAuth from "../../hooks/useAuth";
import PageBanner from "../Shared/PageBanner";
import ClassCard from "./ClassCard";
const Classes = () => {
  const [classes, setClasses] = useState();
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get("https://assignment-12-server-psi-three.vercel.app/classes")
      .then((res) => setClasses(res.data));
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const bannerTitle = "Interactive Classes";
  const bannerTag =
    "Engage, collaborate, and learn in our dynamic interactive classes at CreativeCampers. Experience hands-on activities, group discussions, and immersive learning. Foster camaraderie and enhance understanding through active participation. Join us for an enjoyable and enriching interactive learning experience.";

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
      <PageBanner
        bannerImg={bannerImg}
        bannerTitle={bannerTitle}
        bannerTag={bannerTag}
      ></PageBanner>
      <div>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:gap-4 lg:gap-6">
            {classes?.map((singleClass) => (
              <ClassCard
                key={singleClass?._id}
                singleClass={singleClass}
                handleSelectClass={handleSelectClass}
              ></ClassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
