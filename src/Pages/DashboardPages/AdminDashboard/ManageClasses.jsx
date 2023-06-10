import axios from "axios";
import useClasses from "../../../hooks/useClasses";
import ManageClassesCard from "./ManageClassesCard";
import Swal from "sweetalert2";
import { useState } from "react";


const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    const [feedbackClass, setFeedbackClass] = useState({});


    const handleClassStatus = async (status, id) => {
        console.log(status, id)
        const res = await axios.patch(`http://localhost:5000/classes/status/${id}`, { status: status })
        const data = res.data;
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `${status === "approved" ? "Approved!" : "Denied! Now leave a feedback!"}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const handleFeedbackModal = (classToFeedback) => {
        setFeedbackClass(classToFeedback)
    }

    const handleSendFeedback = async(event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        console.log(feedback)
        const res = await axios.patch(`http://localhost:5000/classes/feedback/${feedbackClass._id}`, { feedback: feedback })
        const data = res.data;
        if (data.modifiedCount > 0) {
            refetch();
            form.reset();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `Feedback send successfully!`,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <div className="w-full p-8 space-y-4">
            Total Classes: {classes.length}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes?.map(singleClass => <ManageClassesCard key={singleClass?._id} singleClass={singleClass} handleClassStatus={handleClassStatus} handleFeedbackModal={handleFeedbackModal}></ManageClassesCard>)
                }
            </div>
            {/* Modal Section for feedback  */}
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">

                </form>
            </dialog>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSendFeedback} className="modal-box">
                    <h3 className="font-bold text-lg">Feedback</h3>
                    <p className="font-bold">Class: <span className="font-normal">{feedbackClass.name}</span></p>
                    <div className="form-control my-8 w-full">
                        <textarea className="textarea textarea-bordered" name="feedback" placeholder="Type here"></textarea>
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <input type="submit" className="btn btn-warning normal-case" value="Send Feedback" />
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageClasses;