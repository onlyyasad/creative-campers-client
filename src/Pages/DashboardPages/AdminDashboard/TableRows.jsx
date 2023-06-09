

const TableRows = ({ user, idx, handleMakeAdmin, handleMakeInstructor }) => {
    const { name, email, photoURL, role } = user;
    
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>{email}</td>
            <td className={`${role === "instructor" && "text-warning" || role === "admin" && "text-blue-700"}`}>{role}</td>
            <th>
                <button onClick={() => handleMakeInstructor(email, name)} className={`btn btn-warning normal-case btn-xs ${role === "instructor"? "btn-disabled" : ""}`}>Make Instructor</button>
            </th>
            <th>
                <button onClick={() => handleMakeAdmin(email, name)} className={`btn btn-primary normal-case btn-xs ${role === "admin"? "btn-disabled" : ""}`}>Make Admin</button>
            </th>
        </tr>
    );
};

export default TableRows;