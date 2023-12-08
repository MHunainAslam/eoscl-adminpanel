import React from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { Link } from 'react-router-dom'
const Profile = () => {
    return (
        <>
            <div className="d-md-flex justify-content-between">
                
                <p className="heading-m">
                    Profile
                </p>
                <div className="d-flex h-100 col-md-6">
                    <Link to={'/edit-profile'} className='btn w-50 primary-btn me-3'>Edit Profile</Link>
                    <Link to={'/changepassword'} className='btn w-50 primary-btn'>Change Password</Link>
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
                                    Personal Information</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile