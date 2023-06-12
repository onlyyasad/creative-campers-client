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
            <WhatMakesUsSpecial></WhatMakesUsSpecial>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;