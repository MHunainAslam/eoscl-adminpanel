import React from 'react'
import back from '../assets/images/Feature-Image-How-to-Successfully-Sell-on-Amazon-This-Holiday-Season.jpg'
import back2 from '../assets/images/61fa370baa75264321c10ccf_cricket.jpg'
import logo from '../assets/images/logo/eoscl-logo.png'
import LoginForm from '../components/auth/LoginForm'

const Login = () => {
    return (
        <>
            <section className='login-bg'>
                <div className="container">
                    <div className="row align-items-center min-vh-100 justify-content-center">
                        <div className="row col-md-10">
                            <div className="col-lg-6 d-lg-block d-none login-left">
                                <img src={back2} className='' alt="" />
                            </div>
                            <div className="col-lg-6 my-auto login-right text-center">
                                <img src={logo} className='' alt="" />
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login