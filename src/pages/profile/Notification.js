import React, { useEffect, useState } from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import cardimg from '../../assets/images/null.png'
import { app_url, img_url } from '../../config'
import axios from 'axios'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
const Notification = ({ state, authme }) => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const userdata = JSON.parse(localStorage.getItem('EosclDashboard')).data

    const [image, setImage] = useState(user);
    const [isDisable, setisDisable] = useState(false)
    const [isLoading, setisLoading] = useState(true);
    const [notistatus, setnotistatus] = useState(true);
    const [data, setdata] = useState([]);
    const [role, setrole] = useState([]);
    const { slug } = useParams()
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const location = useLocation()
    const logo = location.state;



    const getnoti = () => {
        axios.get(`${app_url}/api/partner-details?status=requested`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                setdata(response?.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }
    useEffect(() => {
        getnoti()
    }, [notistatus])
    const updatestatus = (e) => {
        setisDisable(true)
        axios.put(`${app_url}/api/partner-details/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
                setisDisable(false)
                setnotistatus(!notistatus)
            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisDisable(false)

            });
    }
   







    return (
        <>
            <div className="d-md-flex justify-content-between">

                <div className="d-flex align-items-center">
                    <i className="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Notifications
                    </p>
                </div>

            </div>
            <div className="row position-relative ">
                {isLoading ? <Loader /> :


                    <>

                        <div className="heading-m mb-0 text-p">

                            <div className="row my-4">
                                {data?.data?.length === 0 ?
                                    <p className='heading-sm my-5 text-center'>No Request Found!</p>
                                    : <>
                                        {data?.data?.map((item, i) => (
                                            <div className="col-md-6 mt-3" key={i}>
                                                <div className='card c-card vendorscard'>
                                                    <div className="card-body">
                                                        <div className="d-flex  justify-content-between">
                                                            <div className={`v-logo ${item.status === 'active' ? 'active' : ''} `}>
                                                                {authme?.data?.image === null ?
                                                                    <img src={cardimg} alt="" />
                                                                    :
                                                                    <img src={img_url + authme?.data?.image?.url} alt="" />
                                                                }
                                                            </div>
                                                            <div>
                                                                {item.status === 'requested' ?
                                                                    <p className="para mb-0 text-l para-m">Requested</p> :
                                                                    <>
                                                                        <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                                                        <ul className="dropdown-menu">
                                                                            <li><Link className="dropdown-item" to={`/editpartnerdiscount/${item.id}`} state={item.partner_id}>Edit</Link></li>

                                                                            <li>
                                                                                <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                                                                    <label className="form-check-label text-capitalize" htmlFor={item.id}>{item.status}</label>
                                                                                    <input className="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                        <p className="heading-m text-s">
                                                            {item.discount}%
                                                            <span className='para-lg text-black'>off</span>
                                                        </p>
                                                        <p className="heading-m text-s">
                                                            {item.partner?.company_name}
                                                        </p>
                                                        <p className="para text-capitalize">
                                                            {item.description}
                                                        </p>
                                                        <div className="row mt-2 mb-2 ms-1">
                                                            <button className='btn w-auto primary-btn-border py-1 mt-2 me-2' onClick={updatestatus} id={item.id} value={'active'}>Active</button>
                                                            <button className='btn w-auto primary-btn-border py-1 mt-2 me-2' onClick={updatestatus} id={item.id} value={'inactive'}>Inactive</button>
                                                            <button className='btn w-auto primary-btn-border py-1 mt-2 me-2' onClick={updatestatus} id={item.id} value={'declined'}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        )}
                                    </>}
                            </div>
                        </div>



                    </>
                }

            </div>
        </>
    )
}

export default Notification




// <div className="row mt-4 mb-2 ms-1">
//     <button className='btn w-auto primary-btn-border py-1 me-2' onClick={updatestatus} id={item.id} value={'active'}>Active</button>
//     <button className='btn w-auto primary-btn-border py-1 me-2' onClick={updatestatus} id={item.id} value={'inactive'}>Inactive</button>
//     <button className='btn w-auto primary-btn-border py-1 me-2' onClick={updatestatus} id={item.id} value={'declined'}>Decline</button>
// </div>

// <div className="row mt-3">
//     <div className="card c-card">
//         <div className="card-body px-0">
//             <div className="card my-4 bg-transpatent border-0" >
//                 <div className="d-flex justify-content-center g-0">
//                     <div className="col-md-2x">
//                         <div className="noti-btn-icon-lg mt-2 me-3 " >
//                             <i className="bi bi-bell-fill fs-5"></i>
//                         </div>
//                     </div>
//                     <div className="col-md c-card user-card">
//                         <div className="card-body ">
//                             <p className="card-text text-d para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin tis gravida dolor sit amet is to accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
//                             <div className='d-flex justify-content-between'>
//                                 <span className="para-m text-l">Read</span>
//                                 <span className="para-m text-l">Last updated 3 mins ago</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="card my-4 bg-transpatent border-0" >
//                 <div className="d-flex justify-content-center g-0">
//                     <div className="col-md-2x">
//                         <div className="noti-btn-icon-lg mt-2 me-3 " >
//                             <i className="bi bi-bell-fill fs-5"></i>
//                         </div>
//                     </div>
//                     <div className="col-md c-card user-card">
//                         <div className="card-body ">
//                             <p className="card-text text-d para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin tis gravida dolor sit amet is to accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
//                             <div className='d-flex justify-content-between'>
//                                 <span className="para-m ">Unread</span>
//                                 <span className="para-m text-l">Last updated 3 mins ago</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>