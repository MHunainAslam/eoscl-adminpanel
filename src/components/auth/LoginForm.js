
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { app_url } from '../../config'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [showPass, setshowPass] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const Login = async (e) => {
        e.preventDefault();
        if (Name === '' || Password === '') {
            toast.error('Fields Empty')
        } else {
            setisLoading(true)
            try {
                // Replace with your API endpoint and credentials
                const response = await fetch(
                    `${app_url}/api/login`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: Name, password: Password }),
                    }
                );
                // const response = await axios.post(`${app_url}/api/portalUser/authUser`, { email: email, password: password })
                if (!response.ok) {
                    toast.error("Invalid Credentials");
                    setisLoading(false)


                    return;
                }


                const user = await response.json();
                localStorage.setItem("EosclDashboard", JSON.stringify(user));
                navigate("/dashboard");

                toast.success(user.message);
                setisLoading(false)
                dispatch({ type: "LOGIN", payload: user });
            } catch (error) {
                toast.error(error.message);
                console.error("Error:", error);
                setisLoading(false)
            }

        }

    }
    return (
        <form onSubmit={Login}>
            <input type="text" className='form-control shadow-sm mt-5 inp px-2 py-3' value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='Username or Email' name="" id="" />
            <div className="position-relative d-flex align-items-center mt-3">
                <input type={showPass ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name="" id="" />
                <i class={`bi eye-pass ${showPass ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass(!showPass)}></i>

            </div>
            <div className="text-end mt-3">
                <Link className='para link-hov text-p mt-3 text-end ms-auto' to={'/forget'}>Forget Password </Link>
            </div>
            <button className='btn primary-btn py-2 w-100 mt-5 mb-3' disabled={isLoading}> Login  {isLoading ? <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
            {/* <Link className='para link-hov text-p text-end ms-auto' to={'/registration'}>Resgister Your Self</Link> */}
        </form>
    )
}

export default LoginForm