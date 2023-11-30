import React from 'react'
import man from '../assets/images/avatar/Ellipse 1065.png'
const Header = () => {
    return (
        <>
            <div className="header">
                <i class="bi bi-list fs-3 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#SidebarCanva" aria-controls="SidebarCanva"></i>
                <div className='ms-auto d-flex align-items-center'>
                    <i class="bi bi-bell me-3"></i>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                    <div className=' me-3 dropdown-toggle nav-link pointer' data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={man} alt="" className='man' />

                    </div>
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
        </>
    )
}

export default Header