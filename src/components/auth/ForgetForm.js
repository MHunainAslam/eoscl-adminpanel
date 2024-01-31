import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { app_url } from '../../config'
import axios from 'axios'

const ForgetForm = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [OTP, setOTP] = useState('')
    const [Password, setPassword] = useState('')
    const [showPass, setshowPass] = useState(false)
    const [CPassword, setCPassword] = useState('')
    const [CshowPass, setCshowPass] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const Navigate = useNavigate()
    const [activeComponent, setActiveComponent] = useState('Email');

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    const submitemail = (e) => {
        e.preventDefault()
        if (Email === '') {
            toast.error('Enter Your Registered Email')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/forget-password`, { email: Email }, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type if needed.
                }
            })
                .then(response => {
                    // Handle successful response here
                    handleComponentChange('OTP')
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
    const submitotp = (e) => {
        e.preventDefault()
        if (OTP === '') {
            toast.error('Check Your Email')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/verify-otp`, { email: Email, otp: OTP }, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type if needed.
                }
            })
                .then(response => {
                    // Handle successful response here
                    handleComponentChange('NewPassword')
                    setisLoading(false)
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoading(false)
                });

        }

    }
    const changepass = (e) => {
        e.preventDefault()
        if (Password === '' || CPassword === '') {
            toast.error('Enter Your New Password')
        } else if (Password != CPassword) {
            toast.error("Password Dose'nt Match")
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/reset-password`, { email: Email, otp: OTP, password: Password }, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type if needed.
                }
            })
                .then(response => {
                    // Handle successful response here
                    Navigate('/')
                    setisLoading(false)
                    toast.success(response?.data?.message)
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoading(false)
                });

        }

    }
    const changeemail = () => {
        handleComponentChange('Email')
        setEmail('')
    }
    const cancel = () => {
        handleComponentChange('Email')
        setEmail('')
        setPassword('')
        setCPassword('')
        setOTP('')
        Navigate('/')
    }
    return (
        <div >
            {activeComponent === 'Email' && <>
                <form action="" onSubmit={submitemail}>
                    <p className="heading-sm mt-5">
                        Enter Your Registered Email
                    </p>
                    <input type="email" className='form-control shadow-sm mt-5 inp px-2 py-3' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="" id="" />
                    <button className='btn primary-btn py-2 w-100 mt-5 mb-3' type='submit'> Send OTP {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                    <Link className='para link-hov text-p mt-3 text-end ms-auto' onClick={cancel} to={'/'}>Cancel</Link>
                </form>
            </>}
            {activeComponent === 'OTP' && <>
                <p className="heading-sm mt-5">
                    Enter Your OTP
                </p>
                <form action="" onSubmit={submitotp}>
                    <input type="text" className='form-control shadow-sm mt-5 inp px-2 py-3' value={OTP} onChange={(e) => setOTP(e.target.value)} placeholder='OTP' name="" id="" />
                    <button type='submit' className='btn primary-btn py-2 w-100 mt-5 mb-3' > Submit OTP {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                </form>
                <Link className='para link-hov text-p mt-3 text-end ms-auto' onClick={changeemail} to={'#'}>Change Email</Link>
            </>}
            {activeComponent === 'NewPassword' && <>
                <p className="heading-sm mt-5">
                    Enter New Password
                </p>
                <form action="" onSubmit={changepass}>
                    <div className="position-relative d-flex align-items-center mt-3">
                        <input type={showPass ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name="" id="" />
                        <i className={`bi eye-pass ${showPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass(!showPass)}></i>

                    </div>
                    <div className="position-relative d-flex align-items-center mt-3">
                        <input type={CshowPass ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={CPassword} onChange={(e) => { setCPassword(e.target.value) }} placeholder='Confirm Password' name="" id="" />
                        <i className={`bi eye-pass ${CshowPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setCshowPass(!CshowPass)}></i>

                    </div>
                    <button className='btn primary-btn py-2 w-100 mt-5 mb-3' type="submit" > Submit {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''} </button>
                    <Link className='para link-hov text-p mt-3 text-end ms-auto' onClick={cancel} to={'/'}>Cancel</Link>
                </form>
            </>}





        </div>
    )
}

export default ForgetForm

