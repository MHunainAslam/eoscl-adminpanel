import React, { useState } from 'react'
import man from '../assets/images/avatar/Ellipse 1065.png'
import Logout from './Logout'
import { Link } from 'react-router-dom'
const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

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
                            <li>
                                <Link class="dropdown-item d-flex justify-content-center" to="/notification">

                                    <p className='mb-0 '>
                                        View All      
                                        
                                    </p>
                                </Link>
                            </li>

                        </ul>
                    </li>

                    <li className='nav-item dropdown me-3 pointer list-unstyled notiication-btn'>
                        <img src={man} alt="" className='dropdown-toggle nav-link  man' data-bs-toggle="dropdown" aria-expanded="false" />
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
                            Robbert Broen
                        </p>
                        <p className="mb-0 para-m">
                            manager
                        </p>
                    </div>
                </div>
            </div>
            <Logout />
        </>
    )
}

export default Header