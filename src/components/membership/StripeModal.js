import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeModal = ({ PkgPrice , settransaction_id}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            // amount: PkgPrice * 100,
        });

        if (error) {
            setError(error.message);
            console.error(error);
        } else {
            // Send paymentMethod.id to your server to complete the payment
            console.log('Payment Method:', paymentMethod);
            settransaction_id(paymentMethod?.id)
        }
    };

    return (
        <div >
            <CardElement className='form-control py-3' />
            <div className="d-flex">
                <button className='btn primary-btn  mt-3 ms-auto' type="submit" onClick={handleSubmit} disabled={!stripe}>
                    Pay
                </button>
            </div>
            {error && <div>{error}</div>}
        </div>
    );
};

export default StripeModal;
