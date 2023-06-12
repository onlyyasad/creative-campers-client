import usePaymentHistory from "../../../hooks/usePaymentHistory";
import PaymentHistoryTableRow from "./PaymentHistoryTableRow";


const PaymentHistory = () => {
    const [enrolledClasses] = usePaymentHistory();
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Payment History</h2>
            </div>
            <div>
                <div className="overflow-x-auto flex items-center max-w-sm md:max-w-md lg:max-w-full rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-warning">
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