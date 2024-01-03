import React, { Suspense, useEffect, useState } from 'react'
import nonimg from '../../assets/images/null.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const AllVendorsCard = () => {
    const [isLoading, setisLoading] = useState(true)
    const [AllPartners, setAllPartners] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const { slug } = useParams()
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
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
                    {AllPartners?.data?.reverse()?.map((item, i) => (
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className='card h-100  c-card vendorscard'>

                                <div className="card-body">
                                    <div className="d-flex  justify-content-between">
                                        <div className={`v-logo ${item.status === 'active' ? 'active' : ''} `}>
                                            {item.image === null ?
                                                <img src={nonimg} alt="" />
                                                :
                                                <img src={img_url + item.image?.url} alt="" />

                                            }
                                        </div>
                                        <div>
                                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                            <ul class="dropdown-menu">
                                                {user?.role?.name === "Admin" ?
                                                    <>
                                                        <li><Link class="dropdown-item" to={`/editpartner/${item.id}`} >Edit</Link></li>
                                                        <li><Link class="dropdown-item" to={`/viewpartner/${item.id}`} state={item.image}>View</Link></li>

                                                        <li>
                                                            <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                                                <label class="form-check-label text-capitalize" for="flexSwitchCheckChecked">{item.status}</label>
                                                                <input class="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                            </div>
                                                        </li>
                                                    </>
                                                    :
                                                    <li><Link class="dropdown-item" to={`/viewpartner/${item.id}`} state={item.image}>View</Link></li>
                                                }
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

export default AllVendorsCard
