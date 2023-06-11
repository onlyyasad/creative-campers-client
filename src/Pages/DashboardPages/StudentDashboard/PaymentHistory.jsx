import usePaymentHistory from "../../../hooks/usePaymentHistory";
import PaymentHistoryTableRow from "./PaymentHistoryTableRow";


const PaymentHistory = () => {
    const [enrolledClasses] = usePaymentHistory();
    return (
        <div className='w-full'>
            My payment history
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>TransactionID</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enrolledClasses.map((singleClass, idx) => <PaymentHistoryTableRow key={singleClass._id} idx={idx} singleClass={singleClass}></PaymentHistoryTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;