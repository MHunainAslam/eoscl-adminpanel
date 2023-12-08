import React from 'react'
import user from '../../assets/images/vendors/Image 5.png'
import { Link, useNavigate } from 'react-router-dom'
const MembershipView = () => {
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
                        Membership Detail
                    </p>
                </div>
                
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center">
                                <img src={user} class="rounded-0 object-fit-contain user-img" alt="..." />
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">

                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            Beginner
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Package Price:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            $100,000
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Description:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta facere dignissimos. Dolores nisi facere doloribus blanditiis? Dicta eveniet odio cumque accusamus delectus commodi, obcaecati vitae sequi quis animi voluptatem!
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Expires At:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="para">
                                            12/12/2024
                                            {/* <input type="date" className='form-control inp' name="" id="" /> */}
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

export default MembershipView