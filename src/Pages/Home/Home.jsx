import Banner from "../Shared/Banner";
import EnrollmentTimeout from "./EnrollmentTimeout";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EnrollmentTimeout></EnrollmentTimeout>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;