import React, { useEffect, useState } from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/images/vendors/Rectangle 14.png'
import { app_url } from '../../config'
import axios from 'axios'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
const ViewVendors = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [image, setImage] = useState(user);
    const [isLoading, setisLoading] = useState(true);
    const [data, setdata] = useState([]);
    const { slug } = useParams()
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }

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

    useEffect(() => {
        axios.get(`${app_url}/api/partner-details/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message + 'lol')
                setisLoading(false)
            });
    }, [])
    return (
        <>
            <div className="d-md-flex justify-content-between">

                <div className="d-flex align-items-center">
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Partners Detail
                    </p>
                </div>
                <div className="d-flex justify-content-end h-100  col-md-6">
                    <Link to={'/addpartnerdiscount'} className='btn w-50 primary-btn me-3'>Add Discount</Link>
                </div>
            </div>
            <div className="row position-relative">
                {isLoading ? <Loader /> :

                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='card c-card vendorscard'>

                            <div className="card-body">
                                <div className="d-flex  justify-content-between">
                                    <div className='v-logo active'>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div>
                                        <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="/editpartnerdiscount">Edit</Link></li>

                                            <li>
                                                <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                                    <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="heading-m text-s">
                                    35% <span className='para-lg text-black'>off</span>
                                </p>
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                                </p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default ViewVendors

