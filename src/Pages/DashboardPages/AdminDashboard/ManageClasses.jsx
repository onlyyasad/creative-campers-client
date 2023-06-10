import useClasses from "../../../hooks/useClasses";


const ManageClasses = () => {
    const [classes] = useClasses();
    
    return (
        <div className="w-full">
            Total Classes: {classes.length}
        </div>
    );
};

export default ManageClasses;