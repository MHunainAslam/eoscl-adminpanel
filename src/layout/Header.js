import React, { useEffect, useState } from 'react'
import man from '../assets/images/avatar/user.webp'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import { app_url, img_url } from '../config'
import toast from 'react-hot-toast'
import axios from 'axios'
const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    useEffect(() => {
        axios.get(`${app_url}/api/authMe`, {
            headers: {
                'Authorization': `Bearer ${user?.token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setdata(response.data.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])

    return (
        <>
            <div className="header">
                <i class="bi bi-list fs-3 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#SidebarCanva" aria-controls="SidebarCanva"></i>
                <div className='ms-auto d-flex align-items-center'>



                    <li class="nav-item dropdown notiication-btn">
                        <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-bell me-3 fs-4"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <p className="heading-sm text-center">Notification</p>
                            {user?.role?.name != 'User' ?
                                <>
                                    <li>
                                        <Link class="dropdown-item d-flex" href="#">
                                            <div className="noti-btn-icon me-3">
                                                <i class="bi bi-bell-fill"></i>
                                            </div>
                                            <p className='mb-0 '>
                                                New user has been registered on the platform
                                                <br />
                                                <span className='text-l para-m'> {date} 10:20 am</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item d-flex" href="#">
                                            <div className="noti-btn-icon me-3">
                                                <i class="bi bi-bell-fill"></i>
                                            </div>
                                            <p className='mb-0 '>
                                                New user has been registered on the platform
                                                <br />
                                                <span className='text-l para-m'> {date} 10:20 am</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item d-flex" href="#">
                                            <div className="noti-btn-icon me-3">
                                                <i class="bi bi-bell-fill"></i>
                                            </div>
                                            <p className='mb-0 '>
                                                New user has been registered on the platform
                                                <br />
                                                <span className='text-l para-m'> {date} 10:20 am</span>
                                            </p>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                {/* <li>
                                    <Link class="dropdown-item d-flex" href="#">
                                        <div className="noti-btn-icon me-3">
                                            <i class="bi bi-bell-fill"></i>
                                        </div>
                                        <p className='mb-0 '>
                                            Your Subscription Expires Soon
                                            <br />
                                            <span className='text-l para-m'> {date} {new Date().toLocaleTimeString()} am</span>
                                        </p>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link class="dropdown-item d-flex justify-content-center px-5" href="#">
                                     
                                        <p className='mb-0 text-l para-m text-center'>
                                           0 New Notifications!
                                        </p>
                                    </Link>
                                </li>
                                </>
                            }
                            {/* <li>
                                <Link class="dropdown-item d-flex justify-content-center" to="/notification">

                                    <p className='mb-0 w-100 text-center '>
                                        View All

                                    </p>
                                </Link>
                            </li> */}

                        </ul>
                    </li>

                    <li className='nav-item dropdown me-3 pointer list-unstyled notiication-btn'>
                        {data?.image === null ?
                            <img src={man} alt="" className='dropdown-toggle nav-link  man' data-bs-toggle="dropdown" aria-expanded="false" /> :
                            <img src={img_url + data?.image?.url} alt="" className='dropdown-toggle nav-link  man' data-bs-toggle="dropdown" aria-expanded="false" />
                        }
                        <ul class="dropdown-menu">
                            <li className='my-1'><Link class="dropdown-item " to="/profile">
                                <i class="bi bi-person-fill me-2"></i>
                                Profile
                            </Link></li>
                            <li className='my-1'><Link class="dropdown-item " to="#" data-bs-toggle="modal" data-bs-target="#LogoutModal">
                                <i class="bi bi-power me-2 "></i>
                                Logout
                            </Link></li>
                        </ul>
                    </li>
                    <div>
                        <p className="mb-0 para fw-bold">
                            {data?.name}
                        </p>
                        <p className="mb-0 para-m">
                            {data?.role?.name}
                        </p>
                    </div>
                </div>
            </div>
            <Logout />
        </>
    )
}

export default Header