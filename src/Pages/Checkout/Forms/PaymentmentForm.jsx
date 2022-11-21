import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./paymentForm.css"
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentmentForm() {

    const { clientSecret } = useParams();
    console.log(clientSecret)
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!stripe) {
            return;
        }

        if (!clientSecret) {
            return;
        }

        /* Checking the status of the payment intent. */
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        })


    }, [stripe])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:3000",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);


    }

    const paymentElementOptions = {
        layout: "tabs"
    }


    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <PaymentElement options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} className="btnSubmit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>

            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}

export default PaymentmentForm