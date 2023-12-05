import React from 'react'
import user from '../assets/images/men/Rectangle 1.png'
import { Link, useNavigate } from 'react-router-dom'
const Userview = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        User Profile
                    </p>
                </div>
                <div className="d-flex h-100 col-md-6 justify-content-end">
                    <Link to={'/edit-user'} className='btn w-50 primary-btn me-3'>Edit Profile</Link>
                </div>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center">
                                <img src={user} class=" user-img" alt="..." />
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">

                                <p class="heading-sm">
                                    User Information</p>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Full Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            Zabrina John
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Email:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            ZabrinaJohn@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Phone:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            123 123 123
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Address:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            United State 
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            Active 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userview

