import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../Classes/ClassCard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    const {user} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        fetch("http://localhost:5000/classes/popular")
        .then(res => res.json())
        .then(data => setPopularClasses(data))
    }, [])

    const handleSelectClass = singleClass => {
        const { _id, name, price, image } = singleClass;
        console.log(singleClass)
        const selectedClass = { classId: _id, name, image, price, email: user?.email }
        if (user) {
            axios.post("http://localhost:5000/selectedClasses", selectedClass)
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
        <div className="my-8">
            <h1 className="uppercase font-bold text-3xl my-8 text-center">Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                {
                    popularClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} handleSelectClass={handleSelectClass}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;