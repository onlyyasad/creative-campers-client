

const SelectedClassesTableRows = ({singleClass, idx}) => {
    const {_id, classId, name, price, image} = singleClass;
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
                <button  className={`btn btn-warning normal-case btn-xs `}>Delete</button>
            </th>
            <th>
                <button  className={`btn btn-primary normal-case btn-xs `}>Pay</button>
            </th>
        </tr>
    );
};

export default SelectedClassesTableRows;