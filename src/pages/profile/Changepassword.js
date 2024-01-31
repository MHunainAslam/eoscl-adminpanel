import React, { useState } from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { app_url } from '../../config'
import toast from 'react-hot-toast'
const Changepassword = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [image, setImage] = useState(user);
    const [showPass1, setshowPass1] = useState(false)
    const [showPass2, setshowPass2] = useState(false)
    const [showPass3, setshowPass3] = useState(false)
    const [currentpass, setcurrentpass] = useState('')
    const [newpass, setnewpass] = useState('')
    const [Cnewpass, setCnewpass] = useState('')
    const [isLoading, setisLoading] = useState('')
    const changepass = (e) => {
        e.preventDefault();

        if (currentpass === '' || newpass === '' || Cnewpass === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/change-password`, { current_password: currentpass, password: newpass, password_confirmation: Cnewpass }, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    setisLoading(false)
                    toast.success(response.data.message)
                    setcurrentpass('')
                    setnewpass('')
                    setCnewpass('')
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoading(false)
                });
        }

    }
    return (
        <>
            <div className="d-flex align-items-center">
                <i className="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Change Password
                </p>
            </div>
            <div className="row mt-3">
                <div className="card mb-3 c-card user-card" >
                    <form onSubmit={changepass} className="card-body">
                        <div className="row py-5 ">

                            <div className="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-4">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Current Password:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <div className="position-relative d-flex align-items-center mt-3">
                                            <input type={showPass1 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' value={currentpass} onChange={(e) => setcurrentpass(e.target.value)} placeholder='Password' name="" id="" />
                                            <i className={`bi eye-pass fs-4 pointer ${showPass1 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass1(!showPass1)}></i>

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
                                            <input type={showPass2 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' placeholder='Password' name="" id="" value={newpass} onChange={(e) => setnewpass(e.target.value)} />
                                            <i className={`bi eye-pass fs-4 pointer ${showPass2 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass2(!showPass2)}></i>

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
                                            <input type={showPass3 ? 'text' : 'password'} className='form-control  px-2 py-3 shadow-sm  inp' placeholder='Password' name="" id="" value={Cnewpass} onChange={(e) => setCnewpass(e.target.value)} />
                                            <i className={`bi eye-pass fs-4 pointer ${showPass3 ? ' bi-eye-fill' : 'bi-eye-slash-fill'} `} onClick={(e) => setshowPass3(!showPass3)}></i>

                                        </div>


                                    </div>
                                </div>
                                <div className='w-100 text-end' >
                                    <button className='btn primary-btn px-md-5 mt-4' type="submit">Change Password {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Changepassword

