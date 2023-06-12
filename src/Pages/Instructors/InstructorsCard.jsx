
const InstructorsCard = ({instructor}) => {
    const {name, email, photoURL} = instructor;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="pt-4"><img className="rounded-lg" src={photoURL} alt="instructor" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-warning w-full normal-case btn-primary">View Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;