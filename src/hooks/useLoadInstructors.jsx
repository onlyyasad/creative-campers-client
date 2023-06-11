import axios from 'axios';
import { useEffect, useState } from 'react';

const useLoadInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/users/instructors")
        .then(res => setInstructors(res.data))
    }, [])
    return instructors;
};

export default useLoadInstructors;