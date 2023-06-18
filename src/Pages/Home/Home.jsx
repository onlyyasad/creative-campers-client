import Banner from "../Shared/Banner";
import EnrollmentTimeout from "./EnrollmentTimeout";
import Gallery from "./Gallery";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import WhatMakesUsSpecial from "./WhatMakesUsSpecial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EnrollmentTimeout></EnrollmentTimeout>
      <Gallery></Gallery>
      <PopularClasses></PopularClasses>
      <WhatMakesUsSpecial></WhatMakesUsSpecial>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
