import React, { useState } from 'react'
import user from '../assets/images/men/Rectangle 1.png'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/vendors/Rectangle 14.png'
const ViewVendors = () => {
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
            <div className="d-md-flex justify-content-between">

                <div className="d-flex align-items-center">
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                       Vendors Detail
                    </p>
                </div>
                <div className="d-flex justify-content-end h-100  col-md-6">
                    <Link to={'/addvendorsdiscount'} className='btn w-50 primary-btn me-3'>Add Discount</Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">10</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">14</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">17</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">40</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">20</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">05</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">19</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">23</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="card vendor-card h-100">
                        <div className="card-header">
                            <img src={logo} className='pt-2' alt=''></img>
                            <div className="discount p-3">
                                <div className="heading-m text-white text-center">10</div>
                                <div className="heading-m text-white text-center">% Off</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorum, accusantium illo voluptatibus similique suscipit aut officia! </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewVendors

