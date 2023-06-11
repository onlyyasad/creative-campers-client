import { Link } from "react-router-dom";


const SelectedClassesTableRows = ({singleClass, idx, handleDeleteSelectedClass}) => {
    const {_id, name, price, image} = singleClass;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDeleteSelectedClass(_id)}  className={`btn btn-warning normal-case btn-xs `}>Delete</button>
            </th>
            <th>
                <Link to={`/dashboard/payment/${_id}`}><button className={`btn btn-primary normal-case btn-xs `}>Pay</button></Link>
            </th>
        </tr>
    );
};

export default SelectedClassesTableRows;