import React, { Suspense, useEffect, useState } from 'react'
import nonimg from '../../assets/images/null.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const Card = () => {
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    const [isLoading, setisLoading] = useState(true)
    const [AllPartners, setAllPartners] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const { slug } = useParams()
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const updatestatus = (e) => {
        setisDisable(true)
        axios.put(`${app_url}/api/partners/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token}`,
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
        axios.get(`${app_url}/api/partners?category_id=${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
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
                    {AllPartners?.data?.length === 0 ?
                        <p className='heading-sm my-5 text-center'>No Discounts Found!</p> :


                        <>


                            {AllPartners?.data?.map((item, i) => (
                                <div className="col-lg-4 col-md-6 mt-3" key={i}>
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
                                                    <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to={`/viewpartner/${item.id}`} state={item.image}>View</Link></li>
                                                        {user?.role?.name === "Admin" ?
                                                            <>
                                                                <li><Link className="dropdown-item" to={`/editpartner/${item.id}`}>Edit</Link></li>
                                                                <li>
                                                                    <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                                                        <label className="form-check-label text-capitalize" htmlFor="flexSwitchCheckChecked">{item.status}</label>
                                                                        <input className="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                                    </div>
                                                                </li>
                                                            </>
                                                            : ''}
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
                </>
            }


        </div>
    )
}

export default Card