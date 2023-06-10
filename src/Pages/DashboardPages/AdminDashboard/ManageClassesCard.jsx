import { BsCheckLg } from 'react-icons/bs';
import { TbAlertCircle } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';

const ManageClassesCard = ({ singleClass, handleClassStatus }) => {

    const { _id, name, price, instructor_name, instructor_email, lessons, available_seats, details, image, status, enrolled, feedback } = singleClass;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="h-40"><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className=" font-bold">{name}</h2>
                <div className="flex justify-between gap-4">
                    <div className='font-semibold text-sm text-gray-500'>
                        <p className="">Instructor: <span className='font-normal'>{instructor_name}</span></p>
                        <p className="">Email: <span className='font-normal'>{instructor_email}</span></p>
                    </div>
                    <div>
                        {status === "approved" && 
                        <div className='flex flex-col items-center bg-success p-2 bg-opacity-20 rounded-md'>
                            <button className='btn btn-circle btn-disabled btn-xs text-white text-xl btn-success'><BsCheckLg /></button>
                            <p className='text-xs'>Approved</p>
                        </div> 
                        || status === "pending" &&
                        <div className='flex flex-col items-center bg-warning  p-2 bg-opacity-20 rounded-md'>
                            <button className='btn btn-circle btn-disabled btn-xs text-white text-xl btn-warning'><TbAlertCircle /></button>
                            <p className='text-xs'>Pending</p>
                        </div> 
                        || status === "denied" &&
                        <div className='flex flex-col items-center bg-error  p-2 bg-opacity-20 rounded-md'>
                            <button className='btn btn-circle btn-disabled btn-xs text-white text-xl btn-error'><RxCross2 /></button>
                            <p className='text-xs'>Denied</p>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p className="">Price: <span>${price}</span></p>
                    <p className="text-end">Lessons: <span>{lessons}</span></p>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p className="">Available Seats: <span>{available_seats}</span></p>
                    <p className="text-end">Enrolled: <span>{enrolled}</span></p>
                </div>

                <div className="card-actions justify-between mt-4">
                    <button onClick={() => handleClassStatus("approved", _id)} className={`btn btn-xs normal-case btn-success rounded-xl ${status !== "pending" && "btn-disabled bg-base-200 border-base-200"}`}>Approve</button>
                    <button onClick={() => handleClassStatus("denied", _id)} className={`btn btn-xs normal-case btn-error rounded-xl ${status !== "pending" && "btn-disabled bg-base-200 border-base-200"}`}>Deny</button>
                    <button className="btn btn-xs normal-case btn-info rounded-xl">Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassesCard;