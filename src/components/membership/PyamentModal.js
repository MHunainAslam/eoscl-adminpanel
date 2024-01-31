import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react'
import toast from 'react-hot-toast';

const PyamentModal = ({ PkgPrice, settransaction_id, purchasemembership }) => {
    const handleApprove = async (data, actions) => {
        const order = await actions.order.capture();
        toast.success('Please Wait')
        if (order) {
            setTimeout(() => {

                purchasemembership(order?.value?.id)
            }, 3000);
            settransaction_id(order?.value?.id)
        }
    }
   
    const handleError = (err) => {
        console.log('Payment error:', err);
    };
    return (
        <>



            <PayPalScriptProvider options={{ "client-id": `${process.env.REACT_APP_pay_pal}` }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        // Define the order creation logic here
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: 'USD',
                                        value: PkgPrice,
                                    },
                                    // custom_id: paypalinfostate?.topOrder[0].systemOrderId,
                                },
                            ],
                        });
                    }}
                    onApprove={handleApprove}
                    onError={handleError}
                />
            </PayPalScriptProvider>


        </>
    )
}

export default PyamentModal