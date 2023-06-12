import axios from 'axios';
import { useEffect, useState } from 'react';

const useLoadInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() =>{
        axios.get("https://assignment-12-server-psi-three.vercel.app/users/instructors")
        .then(res => setInstructors(res.data))
    }, [])
    return instructors;
};

export default useLoadInstructors;