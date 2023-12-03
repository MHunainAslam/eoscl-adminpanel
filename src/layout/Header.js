import React from 'react'
import man from '../assets/images/avatar/Ellipse 1065.png'
import Logout from './Logout'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="header">
                <i class="bi bi-list fs-3 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#SidebarCanva" aria-controls="SidebarCanva"></i>
                <div className='ms-auto d-flex align-items-center'>



                    <li class="nav-item dropdown notiication-btn">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-bell me-3 fs-4"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <p className="heading-sm text-center">Notification</p>
                            <li><a class="dropdown-item" href="#">New user has been registered on the platform</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                    <li className='nav-item dropdown me-3 pointer list-unstyled'>
                        <img src={man} alt="" className='dropdown-toggle nav-link  man' data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                            <li><Link class="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#LogoutModal">Logout</Link></li>
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