import React from 'react'
import back from '../assets/images/Feature-Image-How-to-Successfully-Sell-on-Amazon-This-Holiday-Season.jpg'
import back2 from '../assets/images/61fa370baa75264321c10ccf_cricket.jpg'
import logo from '../assets/images/logo/eoscl-logo.png'

import RegistrationForm from '../components/auth/RegistrationForm'

const Registration = () => {
    return (
        <>
            <section className='login-bg'>
                <div className="container">
                    <div className="row align-items-center min-vh-100 justify-content-center">
                        <div className="row col-md-10 col-lg-12">
                            <div className="col-lg-5 d-lg-block d-none login-left">
                                <img src={back2} className='' alt="" />
                            </div>
                            <div className="col-lg-7 my-auto login-right text-center">
                                <img src={logo} className='' alt="" />
                                <RegistrationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration