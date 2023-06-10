

const MyClassesCard = ({myClass}) => {
    
    const {_id, name, price, instructor_name, instructor_email, lessons, available_seats, details, image, status, enrolled, feedback} = myClass;

    const handleUpdateClass = (id) => {
        console.log(id)
    }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className="h-60"><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="flex justify-between items-center gap-4">
                    <p>Lessons: <span>{lessons}</span></p>
                    <p>Available Seats: <span>{available_seats}</span></p>
                    <p>Enrolled: <span>{enrolled}</span></p>
                </div>
                <div>
                    {
                        feedback && <p>{feedback}</p>
                    }
                </div>
                <div className="card-actions justify-between items-center">
                    <p className="font-bold text-lg text-blue-700">${price}</p>
                    <p className="font-bold">Status: <span className={`capitalize font-normal ${status === "pending" && "text-warning" || status === "denied" && "text-danger" || status === "approved" && "text-success"}`}>{status}</span></p>
                    <button onClick={() => handleUpdateClass(_id)} className="btn btn-sm normal-case btn-warning">Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyClassesCard;