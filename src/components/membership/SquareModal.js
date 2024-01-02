import React, { useEffect } from 'react'
import * as Square from '@square/web-sdk';
import toast from 'react-hot-toast';
const SquareModal = ({ settransaction_id }) => {
    const applicationId = 'sandbox-sq0idb-lybe_WkfKNAbb3WklswmwA';
    const locationId = 'LKYXSPGPXK05M';

    useEffect(() => {
        async function startSquarePayment() {
            try {
                const payments = await Square.payments(applicationId, locationId);
                const card = await payments.card();

                await card.attach('#card');

                document.querySelector('#pay').addEventListener('click', async () => {
                    try {
                        const result = await card.tokenize();
                        console.log('Tokenized payment result:', result);
                        settransaction_id(result?.details?.token)
                        toast.success('Payment Successfull')
                        // TODO: Send result.token to your backend for payment processing
                    } catch (ex) {
                        console.error('Error during tokenization:', ex);
                    }
                });
            } catch (error) {
                console.error('Square payment initialization error:', error);
            }
        }

        startSquarePayment();
    }, []);
    return (
        <>
            <div id="card"></div>
            <button type='button' className='btn primary-btn w-auto px-5 py-2 mx-auto' id="pay">Pay</button>
        </>
    )
}

export default SquareModal