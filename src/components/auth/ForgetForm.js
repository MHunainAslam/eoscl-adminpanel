import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const ForgetForm = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [OTP, setOTP] = useState('')
    const [Password, setPassword] = useState('')
    const [showPass, setshowPass] = useState(false)
    const [CPassword, setCPassword] = useState('')
    const [CshowPass, setCshowPass] = useState(false)
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
            handleComponentChange('OTP')
        }

    }
    const submitotp = (e) => {
        e.preventDefault()
        if (OTP === '') {
            toast.error('Check Your Email')
        } else {
            handleComponentChange('NewPassword')
        }

    }
    const changepass = (e) => {
        e.preventDefault()
        if (Password === '' || CPassword === '') {
            toast.error('Enter Your New Password')
        } else if (Password != CPassword) {
            toast.error("Password Dose'nt Match")
        } else {
            Navigate('/')
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
                    <button className='btn primary-btn py-2 w-100 mt-5 mb-3' type='submit'> Send OTP</button>
                    <Link className='para link-hov text-p mt-3 text-end ms-auto' onClick={cancel} to={'/'}>Cancel</Link>
                </form>
            </>}
            {activeComponent === 'OTP' && <>
                <p className="heading-sm mt-5">
                    Enter Your OTP
                </p>
                <form action="" onSubmit={submitotp}>
                    <input type="text" className='form-control shadow-sm mt-5 inp px-2 py-3' value={OTP} onChange={(e) => setOTP(e.target.value)} placeholder='OTP' name="" id="" />
                    <button type='submit' className='btn primary-btn py-2 w-100 mt-5 mb-3' > Submit OTP</button>
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
                        <i class={`bi eye-pass ${showPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass(!showPass)}></i>

                    </div>
                    <div className="position-relative d-flex align-items-center mt-3">
                        <input type={CshowPass ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={CPassword} onChange={(e) => { setCPassword(e.target.value) }} placeholder='Confirm Password' name="" id="" />
                        <i class={`bi eye-pass ${CshowPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setCshowPass(!CshowPass)}></i>

                    </div>
                    <button className='btn primary-btn py-2 w-100 mt-5 mb-3' type="submit"> Submit </button>
                    <Link className='para link-hov text-p mt-3 text-end ms-auto' onClick={cancel} to={'/'}>Cancel</Link>
                </form>
            </>}





        </div>
    )
}

export default ForgetForm

