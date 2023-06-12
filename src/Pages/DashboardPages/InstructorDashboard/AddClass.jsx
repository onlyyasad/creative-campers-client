import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const img_upload_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_upload_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const { name, price, instructor_name, instructor_email, lessons, available_seats, details } = data;

                    const newClass = { name, price: parseFloat(price), instructor_name, instructor_email, lessons, available_seats: parseInt(available_seats), details, image: imgURL, status: "pending", enrolled: 0, feedback: "" }

                    console.log(newClass)

                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class added successfully!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                            }
                        })
                }
            })
    };
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Add a Class</h2>
            </div>
            <div>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 max-w-xl">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Class Name*</span>
                            </label>
                            <input type="text" placeholder="Class Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">Instructor Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} readOnly {...register("instructor_name", { required: true })} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">Instructor Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} readOnly {...register("instructor_email", { required: true })} className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">Lessons*</span>
                                </label>
                                <input type="text" placeholder='Lessons' {...register("lessons", { required: true })} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">Available Seats*</span>
                                </label>
                                <input type="number" placeholder='Available Seats' {...register("available_seats", { required: true })} className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Details*</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("details", { required: true })} placeholder="Type here"></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Image*</span>
                                </label>
                                <input {...register("image", { required: true })} type="file" className="file-input file-input-warning file-input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">Price*</span>
                                </label>
                                <input type="number" placeholder='Price' {...register("price", { required: true })} className="input input-bordered w-full " />
                            </div>
                        </div>
                        <input className="btn btn-warning normal-case w-full" type="submit" value="Add Class" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;