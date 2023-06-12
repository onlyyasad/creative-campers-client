import { useEffect, useState } from "react";
import PageBanner from "../Shared/PageBanner";
import axios from "axios";
import ClassCard from "./ClassCard";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Classes = () => {
    const [classes, setClasses] = useState();
    const { user } = useAuth();
    useEffect(() => {
        axios.get("https://assignment-12-server-psi-three.vercel.app/classes")
            .then(res => setClasses(res.data))
    }, [])

    const location = useLocation();
    const navigate = useNavigate();

    const handleSelectClass = singleClass => {
        const { _id, name, price, image } = singleClass;
        console.log(singleClass)
        const selectedClass = { classId: _id, name, image, price, email: user?.email }
        if (user) {
            axios.post("https://assignment-12-server-psi-three.vercel.app/selectedClasses", selectedClass)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Selected! Now please pay to confirm enroll!',
                            'success'
                        )
                    }
                })
                .catch(error => {
                    console.log(error.response.status)
                    if (error.response.status === 403) {
                        Swal.fire(
                            'Already selected or enrolled!',
                        )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }


    return (
        <div>
            <PageBanner></PageBanner>
            <div>
                <h1 className="uppercase font-bold text-3xl my-8 text-center">Classes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                    {
                        classes?.map(singleClass => <ClassCard key={singleClass?._id} singleClass={singleClass} handleSelectClass={handleSelectClass}></ClassCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;