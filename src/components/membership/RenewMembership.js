'use client'

import React, { useEffect, useState } from 'react'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
import axios from 'axios';
import PyamentModal from './PyamentModal';
import StripeModal from './StripeModal';
import { app_url } from '../../config';
import SquareModal from './SquareModal';
const RenewMembership = ({ PkgName, PkgPrice, Pkgid }) => {
    const [activeComponent, setActiveComponent] = useState('step2');
    const [completedSteps, setCompletedSteps] = useState([]);
    const [PaymentMethod, setPaymentMethod] = useState('')
    const [step1, setstep1] = useState(false)
    const [step2, setstep2] = useState(false)
    const [step3, setstep3] = useState(false)
    const [step4, setstep4] = useState(false)
    const [PayPal, setPayPal] = useState(false)
    const [Name, setName] = useState('')
    const [UserName, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Message, setMessage] = useState('')
    const [transaction_id, settransaction_id] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const [membership_id, setmembership_id] = useState('')
    const [payment_type, setpayment_type] = useState('')

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
        if (!completedSteps.includes(componentName)) {
            setCompletedSteps([...completedSteps, componentName]);
        }
    };

    const MoveStep1 = () => {

        handleComponentChange('step1');

    };

    const MoveStep2 = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(Email);
        console.log(isValidEmail, ';;;')
        if (Name === '' || Email === '' || !isValidEmail || Phone === '' || Message === '') {
            toast.error('All Fields Are Required')
        } else {
            handleComponentChange('step2');
        }
    };
    const backStep2 = () => {
        handleComponentChange('step2');
    };

    const MoveStep3 = () => {

        handleComponentChange('step3');

    };
    const MoveStep4 = () => {
        handleComponentChange('step4');
        setPaymentMethod('paypal')
    };
    const MoveStep5 = () => {
        handleComponentChange('step4');
        setPaymentMethod('square')
    };
    useEffect(() => {
        if (activeComponent === 'step1') {
            setstep1(false)
            setstep2(false)
            setstep3(false)
        }
        if (activeComponent === 'step2') {
            setstep1(true)
            setstep2(false)
            setstep3(false)
        }
        if (activeComponent === 'step3') {
            setstep2(true)
            setstep3(false)
        }
        if (activeComponent === 'step4') {
            setstep3(true)
        }
    }, [activeComponent])

    const formSubmit = () => {
        document.querySelector('.modal-close').click();
    };
    const stripePromise = loadStripe('pk_test_51O7lG8G7P2PzfPo57bZpXzvFZf85D04PLUXKts0HyXZVasYXlBlBMjs95tUFz4Y34dodcvAQJazbEvZ4djz6flK8000nnH1lHv');

    const purchasemembership = (e) => {
        e.preventDefault()

        if (Name === '' || !Email || Phone === '' || Message === '' || UserName === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/memberships-submission`, { name: Name, username: UserName, email: Email, phone_number: Phone, message: Message, membership_id: Pkgid, payment_type: PaymentMethod, transaction_id: transaction_id }, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type if needed.
                }
            })
                .then(response => {
                    // Handle successful response here
                    console.log('formsubmit', response.data);
                    toast.success(response?.data?.message)
                    setisLoading(false)

                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    setisLoading(false)
                    toast.error(error?.response?.data?.message)
                });
        }
    }
    return (
        <>

            <div className="modal fade" id="VendorModal" tabIndex="-1" aria-labelledby="VendorModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content m-modal ">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close modal-close" data-bs-dismiss="modal" aria-label="Close" onClick={MoveStep1}></button>
                        </div>
                        <div className="modal-body pb-4">
                            <form action="" onSubmit={purchasemembership}>
                                <div className="row">
                                    <p className="heading-m text-center text-p">
                                        Membership
                                    </p>
                                    {activeComponent === 'step1' && <>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Name:</label>
                                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Username:</label>
                                            <input type="text" value={UserName} onChange={(e) => setUserName(e.target.value)} className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Email:</label>
                                            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Phone Number:</label>
                                            <input type="text" onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()} value={Phone} onChange={(e) => setPhone(e.target.value)} className='form-control inp px-0' name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Message:</label>
                                            <textarea name="" value={Message} onChange={(e) => setMessage(e.target.value)} className='form-control tarea px-0' id="" cols="30" rows="5"></textarea>
                                        </div>
                                        <div className="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" className="btn primary-btn" onClick={MoveStep2}>Next</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step2' && <>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Package Name:</label>
                                            <input type="text" className='form-control inp px-0' value={PkgName} readOnly name="" id="" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label htmlFor="" className='para mt-3 text-p'>Package Price:</label>
                                            <input type="text" className='form-control inp px-0' value={`${PkgPrice}`} readOnly name="" id="" />
                                        </div>
                                        <div className="modal-footer mt-4 border-0 justify-content-end">
                                            {/* <button type="button" className="btn primary-btn" onClick={MoveStep1} >Previous</button> */}
                                            <button type="button" className="btn primary-btn" onClick={MoveStep3}>Next</button>
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step3' && <>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100' onClick={MoveStep4}>Paypal</button>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <button className='btn primary-btn w-100' onClick={MoveStep5}>Square</button>
                                        </div>

                                        <div className="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" className="btn primary-btn" onClick={backStep2} >Previous</button>
                                            {/* <button type="button" className="btn primary-btn" onClick={formSubmit}>Next</button> */}
                                        </div>
                                    </>
                                    }
                                    {activeComponent === 'step4' && <>
                                        {PaymentMethod === 'paypal' ?
                                            <PyamentModal settransaction_id={settransaction_id} PkgPrice={PkgPrice} />
                                            : 'square' ?
                                                // <Elements stripe={stripePromise}>
                                                //     <StripeModal settransaction_id={settransaction_id} PkgPrice={PkgPrice} />
                                                // </Elements>
                                                <SquareModal settransaction_id={settransaction_id} PkgPrice={PkgPrice} />
                                                : ''}
                                        <div className="modal-footer mt-4 border-0 justify-content-end">
                                            <button type="button" className="btn primary-btn" onClick={MoveStep3} >Previous</button>
                                            <button type="submit" className="btn primary-btn" >Submit</button>
                                        </div>
                                    </>
                                    }
                                    <div className="d-flex justify-content-center">
                                        {/* <div className={`steps ${step1 ? 'complete' : ''}`}></div> */}
                                        <div className={`steps ${step2 ? 'complete' : ''}`}></div>
                                        <div className={`steps ${step3 ? 'complete' : ''}`}></div>
                                        <div className={`steps ${step4 ? 'complete' : ''}`}></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default RenewMembership
