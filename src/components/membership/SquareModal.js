import React, { useEffect } from 'react'
import * as Square from '@square/web-sdk';
import toast from 'react-hot-toast';
const SquareModal = ({ settransaction_id, setisLoading, purchasemembership }) => {
    const applicationId = 'sandbox-sq0idb-8ngIOJuiCX7twSR1K3qwrw';
    const locationId = 'L5JECG1CPDXKW';

    useEffect(() => {
        async function startSquarePayment() {
            try {
                const payments = await Square.payments(applicationId, locationId);
                const card = await payments.card();

                await card.attach('#card');

                document.querySelector('#pay').addEventListener('click', async () => {

                    try {
                        setisLoading(false)
                        const result = await card.tokenize();
                        console.log('Tokenized payment result:', result, result?.token);
                        settransaction_id(result?.token)
                        purchasemembership(result.token)
                        // TODO: Send result.token to your backend for payment processing
                    } catch (ex) {
                        setisLoading(false)
                        toast.error('Payment Not Successful')
                        console.error('Error during tokenization', ex);
                        setisLoading(false)
                    }
                });
            } catch (error) {
                setisLoading(false)
                console.error('Square payment initialization error:', error);
                toast.error('Payment Not Successful')
            }
        }

        startSquarePayment();
    }, []);
    return (
        <>
            <div id="card"></div>
            {/* <button type='button' className='btn primary-btn w-auto px-5 py-2 mx-auto' >Pay</button> */}
        </>
    )
}

export default SquareModal