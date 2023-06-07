import Banner from "../Shared/Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;