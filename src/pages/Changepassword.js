import React, { useState } from 'react'
import user from '../assets/images/men/Rectangle 1.png'
import { useNavigate } from 'react-router'
const Changepassword = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [image, setImage] = useState(user);
    const [showPass1, setshowPass1] = useState(false)
    const [showPass2, setshowPass2] = useState(false)
    const [showPass3, setshowPass3] = useState(false)


    return (
        <>
            <div className="d-flex align-items-center">
                <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Change Password
                </p>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center position-relative">

                                <label htmlFor='userimg' className="user-img">

                                    <img class="w-100 h-100" src={image} alt="Uploaded" />

                                </label>
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-4">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Current Password:
                                        </p>
                                    </div>
                                    <div className="col">
                                    <div className="position-relative d-flex align-items-center mt-3">
                                            <input type={showPass1 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' placeholder='Password' name="" id="" />
                                            <i class={`bi eye-pass fs-4 pointer ${showPass1 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass1(!showPass1)}></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-4">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            New Password:
                                        </p>
                                    </div>
                                    <div className="col">

                                        <div className="position-relative d-flex align-items-center mt-3">
                                            <input type={showPass2 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' placeholder='Password' name="" id="" />
                                            <i class={`bi eye-pass fs-4 pointer ${showPass2 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass2(!showPass2)}></i>

                                        </div>


                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-4">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Confirm New Password:
                                        </p>
                                    </div>
                                    <div className="col">

                                    <div className="position-relative d-flex align-items-center mt-3">
                                            <input type={showPass3 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' placeholder='Password' name="" id="" />
                                            <i class={`bi eye-pass fs-4 pointer ${showPass3 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass3(!showPass3)}></i>

                                        </div>


                                    </div>
                                </div>
                                <div className='w-100 text-end' >
                                    <button className='btn primary-btn px-md-5 mt-4'>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Changepassword

