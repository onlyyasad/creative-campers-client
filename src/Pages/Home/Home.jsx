import Banner from "../Shared/Banner";
import EnrollmentTimeout from "./EnrollmentTimeout";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import WhatMakesUsSpecial from "./WhatMakesUsSpecial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EnrollmentTimeout></EnrollmentTimeout>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <WhatMakesUsSpecial></WhatMakesUsSpecial>
        </div>
    );
};

export default Home;