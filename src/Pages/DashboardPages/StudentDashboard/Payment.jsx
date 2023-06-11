import { useParams } from "react-router-dom";
import useMySelectedClasses from "../../../hooks/useMySelectedClasses";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [selectedClasses, refetch] = useMySelectedClasses();

    const classToPay = selectedClasses?.find(singleClass => singleClass?._id === id);
    const price = classToPay?.price;

    return (
        <div className="w-full">
            You have to pay ${classToPay?.price}
            <div className="bg-base-200 p-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} classToPay={classToPay} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;