import React, { useState } from 'react'
import user from '../assets/images/men/Rectangle 1.png'
import { useNavigate } from 'react-router'
const Edituser = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [image, setImage] = useState(user);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className="d-flex align-items-center">
                <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Edit User Profile
                </p>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center position-relative">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img">

                                    {image && <img class="w-100 h-100" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
                                    <div className="cam-img-change pointer" >
                                        <i class="bi bi-camera-fill "></i>
                                    </div>
                                </label>
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Full Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Email:
                                        </p>
                                    </div>
                                    <div className="col">

                                        <input type="text" className='form-control inp shadow-sm' name="" id="" />


                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Phone:
                                        </p>
                                    </div>
                                    <div className="col">

                                        <input type="text" className='form-control inp shadow-sm' name="" id="" />


                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Address:
                                        </p>
                                    </div>
                                    <div className="col">

                                        <input type="text" className='form-control inp shadow-sm' name="" id="" />


                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">

                                        <div class="form-check form-switch dropdown-item  d-flex">
                                            {/* <label class="form-check-label me-3" for="flexSwitchCheckChecked">Active</label> */}
                                            <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
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

export default Edituser
