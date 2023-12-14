import React, { Suspense, useEffect, useState } from 'react'
import v1 from '../../assets/images/vendors/Rectangle 12.png'
import v2 from '../../assets/images/vendors/Rectangle 14.png'
import v3 from '../../assets/images/vendors/Rectangle 16.png'
import v4 from '../../assets/images/vendors/Rectangle 18.png'
import v5 from '../../assets/images/vendors/Rectangle 20.png'
import v6 from '../../assets/images/vendors/Rectangle 23.png'
import v7 from '../../assets/images/vendors/Rectangle 24.png'
import v8 from '../../assets/images/vendors/Rectangle 26.png'
import v9 from '../../assets/images/vendors/Rectangle 28.png'
import v10 from '../../assets/images/vendors/Rectangle 31.png'
import v11 from '../../assets/images/vendors/Rectangle 32.png'
import v12 from '../../assets/images/vendors/Rectangle 34.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const Card = () => {
    const [isLoading, setisLoading] = useState(true)
    const [AllPartners, setAllPartners] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const updatestatus = (e) => {
        setisDisable(true)
        console.log(e.target.id)
        axios.put(`${app_url}/api/partners/${e.target.id}/update-status`, { status: e.target.value }, {
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
        axios.get(`${app_url}/api/partners`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setAllPartners(response.data)

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
                    {AllPartners?.data?.map((item, i) => (
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className='card h-100  c-card vendorscard'>

                                <div className="card-body">
                                    <div className="d-flex  justify-content-between">
                                        <div className={`v-logo ${item.status === 'active' ? 'active' : ''} `}>
                                            <img src={img_url + item.image?.url} alt="" />
                                        </div>
                                        <div>
                                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to={`/editpartner/${item.id}`}>Edit</Link></li>
                                                <li><Link class="dropdown-item" to={`/viewpartner/${item.id}`}>View</Link></li>
                                                <li>
                                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                                        <label class="form-check-label text-capitalize" for="flexSwitchCheckChecked">{item.status}</label>
                                                        <input class="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="heading-m text-s">
                                        {item.discount_upto}% <span className='para-lg text-black'>off</span>
                                    </p>
                                    <p className="para">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </>
            }


        </div>
    )
}

export default Card