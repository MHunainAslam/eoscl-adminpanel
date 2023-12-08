import React from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const AddNewuser = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [PkgPrice, setPkgPrice] = useState('')
    return (
        <>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Add New User
                    </p>
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
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Full Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                       <input type="text" className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Email:
                                        </p>
                                    </div>
                                    <div className="col">
                                       <input type="text" className='inp form-control' name="" id="" />

                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Phone:
                                        </p>
                                    </div>
                                    <div className="col">
                                    <input type="text" className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Address:
                                        </p>
                                    </div>
                                    <div className="col">
                                    <input type="text" className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                        Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="" onChange={(e)=> setPkgPrice(e.target.value)}>
                                            <option value="" hidden>Select Memship Type</option>
                                            <option value="$100,000">Beginner</option>
                                            <option value="$150,000">Premier</option>
                                            <option value="$200,000">Elite</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Package Price:
                                        </p>
                                    </div>
                                    <div className="col">
                                    <input type="text" value={PkgPrice} readOnly className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="">
                                            <option value="" hidden>Select Status</option>
                                            <option value="">Active</option>
                                            <option value="">Inactive</option>
                                        </select>
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

export default AddNewuser