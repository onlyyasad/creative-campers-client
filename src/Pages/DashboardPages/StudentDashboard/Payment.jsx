import { useParams } from "react-router-dom";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [selectedClasses, ] = useMySelectedClasses();

    const classToPay = selectedClasses?.find(singleClass => singleClass?._id === id);
    const price = classToPay?.price;

    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-warning"></div>
                <h2>Payment</h2>
            </div>
            <p>You have to pay ${classToPay?.price}</p>
            <div className="bg-base-100 p-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} classToPay={classToPay} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;