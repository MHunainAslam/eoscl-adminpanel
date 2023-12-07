import React, { useState } from 'react'
import user from '../assets/images/vendors/Rectangle 20.png'
import { useNavigate } from 'react-router'
const AddvendorsDiscount = () => {
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
                    Add Discount
                </p>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            {/* <div class="col-md-2 text-md-start text-center position-relative">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img ">

                                    {image && <img class="w-100 h-100 object-fit-cover rounded-0" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
                                    <div className="cam-img-change-2 pointer mx-auto" >
                                        <i class="bi bi-camera-fill "></i>
                                    </div>
                                </label>
                            </div> */}
                            <div class="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="">
                                            <option value="" hidden>Select Card Type</option>
                                            <option value="">Beginner</option>
                                            <option value="">Premier</option>
                                            <option value="">Elite</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Discount:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>

                                <div className="d-flex  my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Description:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <textarea type="text" className='form-control tarea shadow-sm' name="" rows={5} id="" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
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

export default AddvendorsDiscount

