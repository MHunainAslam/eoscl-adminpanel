import React, { useEffect, useState } from 'react'
import card from '../../assets/images/null.png'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const UserMembershipcard = ({ authme }) => {
    const [isLoading, setisLoading] = useState(true)
    const [isDisable, setisDisable] = useState(false)
    const [data, setdata] = useState([])
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data


    const updatestatus = (e) => {
        setisDisable(true)
        axios.put(`${app_url}/api/memberships/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token?.token}`,
            }
        })
            .then(response => {
                // Handle successful response here
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
        axios.get(`${app_url}/api/memberships/${authme?.data?.membership_id}`, {
            headers: {
                'Authorization': `Bearer ${token?.token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                setdata(response.data.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                // toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [isDisable, authme])
    return (
        <div className="row position-relative">
            {isLoading ? <Loader /> :
                <>
                    {/* {data?.data?.map((item, i) => ( */}
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className='card c-card vendorscard h-100'>

                            <div className="card-body">
                                <div className="d-flex  justify-content-between">
                                    <div className={`v-logo ${data?.status === 'active' ? 'active' : ''}`}>
                                        {data?.image === null ?
                                            <img src={card} alt="" /> :
                                            <img src={img_url + data?.image?.url} alt="" />
                                        }
                                    </div>
                                    <div>
                                        <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to={`/membershipview/${data?.id}`}>View</Link></li>
                                            {/* <li><Link className="dropdown-item" to={`/editmembership/${data?.id}`}>Edit</Link></li>
                                            <li>
                                                <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                                    <label className="form-check-label text-capitalize" htmlFor="flexSwitchCheckChecked">{data?.status}</label>
                                                    <input className="form-check-input mx-0" disabled={isDisable} checked={data?.status === 'active'} id={data?.id} value={data?.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <p className="heading-m text-s">
                                    {data?.title}
                                </p>
                                <p className='para-lg text-black'>${data?.price}</p>
                                <div className="para" dangerouslySetInnerHTML={{ __html: data?.description }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
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
                                <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/editmembership">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="/membershipview">View</Link></li>
                                    <li>
                                        <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                                            <input className="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
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
                                <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/editmembership">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="/membershipview">View</Link></li>
                                    <li>
                                        <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                                            <input className="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
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

export default UserMembershipcard

