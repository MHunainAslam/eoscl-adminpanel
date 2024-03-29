import React, { useEffect } from 'react'
import * as Square from '@square/web-sdk';
import toast from 'react-hot-toast';
const SquareModal = ({ settransaction_id, setisLoading, purchasemembership }) => {
    const applicationId = `${process.env.REACT_APP_square_application}`;
    const locationId = `${process.env.REACT_APP_square_locationId}`;

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
                        settransaction_id(result?.token)
                        purchasemembership(result.token)
                        // TODO: Send result.token to your backend for payment processing
                    } catch (ex) {
                        setisLoading(false)
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