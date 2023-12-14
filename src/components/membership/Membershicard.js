import React, { useEffect, useState } from 'react'
import card from '../../assets/images/vendors/Image 5.png'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const Membershicard = () => {
    const [isLoading, setisLoading] = useState(true)
    const [isDisable, setisDisable] = useState(false)
    const [data, setdata] = useState([])
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token


    const updatestatus = (e) => {
        setisDisable(true)
        console.log(e.target.id)
        axios.put(`${app_url}/api/memberships/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisDisable(false)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisDisable(false)

            });
    }
    useEffect(() => {
        axios.get(`${app_url}/api/memberships`, {
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
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [isDisable])
    return (
        <div className="row position-relative">
            {isLoading ? <Loader /> :
                <>
                    {data?.data?.map((item, i) => (
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className='card c-card vendorscard h-100'>

                                <div className="card-body">
                                    <div className="d-flex  justify-content-between">
                                        <div className='v-logo '>
                                            <img src={card} alt="" />
                                        </div>
                                        <div>
                                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to={`/editmembership/${item.id}`}>Edit</Link></li>
                                                <li><Link class="dropdown-item" to={`/membershipview/${item.id}`}>View</Link></li>
                                                <li>
                                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                                        <input class="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="heading-m text-s">
                                        {item.title}
                                    </p>
                                    <p className='para-lg text-black'>${item.price}</p>
                                    <div className="para" dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            }
            {/* <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard h-100'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo '>
                                <img src={card} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/editmembership">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="/membershipview">View</Link></li>
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
                            Premier
                        </p>
                        <p className='para-lg text-black'>$150,000</p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard h-100'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo '>
                                <img src={card} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/editmembership">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="/membershipview">View</Link></li>
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
                            Elite
                        </p>
                        <p className='para-lg text-black'>$200,000</p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div> */}

        </div >
    )
}

export default Membershicard
