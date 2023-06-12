import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const ClassCard = ({singleClass, handleSelectClass}) => {
    const { name, price, instructor_name, instructor_email, lessons, available_seats, details, image, enrolled } = singleClass;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    
    return (
        <div className={`card ${available_seats === 0 && "bg-red-200 border-red-600 border"} bg-base-100 shadow-xl`}>
            <figure className="h-40"><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className=" font-bold">{name}</h2>
                <div className="flex justify-between gap-4">
                    <div className='font-semibold text-sm text-gray-500'>
                        <p className="">Instructor: <span className='font-normal'>{instructor_name}</span></p>
                        <p className="">Email: <span className='font-normal'>{instructor_email}</span></p>
                    </div>
                </div>
                <div>
                    <p>{details}</p>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p className="">Price: <span>${price}</span></p>
                    <p className="text-end">Lessons: <span>{lessons}</span></p>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p className="">Available Seats: <span>{available_seats}</span></p>
                    <p className="text-end">Enrolled: <span>{enrolled}</span></p>
                </div>

                <div className="card-actions mt-4">
                    <button onClick={() => handleSelectClass(singleClass)} className={`btn btn-xs w-full normal-case btn-success rounded-xl ${available_seats === 0 && "btn-disabled bg-base-200 border-base-200 text-gray-500" || isAdmin && "btn-disabled bg-base-200 border-base-200 text-gray-500" || isInstructor && "btn-disabled bg-base-200 border-base-200 text-gray-500"}`}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;