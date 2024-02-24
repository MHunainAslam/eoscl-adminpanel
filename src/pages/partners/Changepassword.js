import axios from 'axios'
import React, { useState } from 'react'
import { app_url } from '../../config'
import { useParams } from 'react-router'
import toast from 'react-hot-toast'

const Changepassword = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [Password1, setPassword1] = useState('')
    const [Password2, setPassword2] = useState('')
    const [isLoadingc, setisLoadingc] = useState(false)
    const { slug } = useParams()
    const changepass = (e) => {
        e.preventDefault();
        if (Password1 === '' || Password2 === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoadingc(true)
            axios.post(`${app_url}/api/change-password-admin-privilege/${slug}`, { password: Password1, password_confirmation: Password2 }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(response => {
                    setisLoadingc(false)
                    toast.success(response.data.message)
                    console.log(response);
                    document.querySelector('.passchange-modal-close')?.click()
                    setPassword1('')
                    setPassword2('')
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoadingc(false)
                });
            // }
        }
    }
    return (
        <>
            <div className="modal fade" id="ChangePass" tabIndex="-1" aria-labelledby="ChangePassLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content m-modal ">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close passchange-modal-close" data-bs-dismiss="modal" aria-label="Close" id='close-mem-modal' ></button>
                        </div>
                        <div className="modal-body pb-4">
                            <form action="" onSubmit={changepass}>
                                <div className="row">
                                    <p className="heading-m text-center text-p">
                                        Renew Password
                                    </p>
                                </div>
                                <div className=" my-3">
                                    <div className="">
                                        <p className="para fw-bold mb-0">
                                            New Password:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Password1} onChange={(e) => setPassword1(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className=" my-3">
                                    <div className="">
                                        <p className="para fw-bold mb-0">
                                            Confirm Password:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Password2} onChange={(e) => setPassword2(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className='btn primary-btn px-md-5 mt-4' disabled={isLoadingc} type='submit'>Update {isLoadingc ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Changepassword