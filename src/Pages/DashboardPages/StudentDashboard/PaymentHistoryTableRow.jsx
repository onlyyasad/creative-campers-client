

const PaymentHistoryTableRow = ({singleClass, idx}) => {
    const {name, image, transactionId, date, price} = singleClass;
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString();
    const formattedTime = dateObj.toLocaleTimeString();
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
            <td>{transactionId}</td>
            <td>{formattedDate}</td>
            <td>{formattedTime}</td>
        </tr>
    );
};

export default PaymentHistoryTableRow;