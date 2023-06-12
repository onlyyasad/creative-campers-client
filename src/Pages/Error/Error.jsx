import { Link } from "react-router-dom";
import errorImage from "../../assets/errorpage.svg"

const Error = () => {
    return (
        <div className="flex flex-col justify-center gap-4 items-center my-10">
            <img className="w-[30%]" src={errorImage} alt="" />
            <Link className="btn btn-warning normal-case" to="/">Back to Home</Link>
        </div>
    );
};

export default Error;