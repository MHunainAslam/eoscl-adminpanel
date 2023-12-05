import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [CPassword, setCPassword] = useState('')
    const [showPass, setshowPass] = useState(false)
    const [showPass2, setshowPass2] = useState(false)
    const Navigate = useNavigate()
    const Login = (e) => {
        e.preventDefault();
        if (Name === '' || Password === '') {
            toast.error('Fields Empty')
        } else {

            Navigate('/dashboard')
        }

    }
    return (
        <form >
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className='form-control shadow-sm mt-5 inp px-2 py-3' value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='First Name' name="" id="" />
                </div>
                <div className="col-md-6">
                    <input type="text" className='form-control shadow-sm mt-md-5 mt-3 inp px-2 py-3' placeholder='Last Name' name="" id="" />
                </div>
            </div>
            <input type="text" className='form-control shadow-sm mt-3 inp px-2 py-3' placeholder='Email' name="" id="" />
            <input type="text" className='form-control shadow-sm mt-3 inp px-2 py-3' placeholder='Username' name="" id="" />
            <div className="row">
                <div className="col-md-6">
                    <div className="position-relative d-flex align-items-center mt-3">
                        <input type={showPass ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name="" id="" />
                        <i class={`bi eye-pass ${showPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass(!showPass)}></i>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="position-relative d-flex align-items-center mt-3">
                        <input type={showPass2 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={CPassword} onChange={(e) => { setCPassword(e.target.value) }} placeholder='Confirm Password' name="" id="" />
                        <i class={`bi eye-pass ${showPass2 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass2(!showPass2)}></i>
                    </div>
                </div>
            </div>
            {/* <div className="text-end mt-3">
                <Link className='para link-hov text-p mt-3 text-end ms-auto' to={'#'}>Forget Password</Link>
            </div> */}
            <button className='btn primary-btn py-2 w-100 mt-5 mb-3'> Register</button>
            <Link className='para link-hov text-p text-end ms-auto' to={'/'}>Already Have Acoount</Link>
        </form>
    )
}

export default RegistrationForm
