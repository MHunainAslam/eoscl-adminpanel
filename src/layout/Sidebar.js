import React from 'react'
import logo from '../assets/images/logo/logo.png'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const userdata = JSON.parse(localStorage.getItem('EosclDashboard'))?.data
    console.log('sidebar ', userdata)
    const closesidebar = () => {
        document.querySelector('.btn-close').click()
    }
    const closeaccordion = () => {

    }
    console.log(userdata, 'ven')
    return (
        <>


            <div class="offcanvas offcanvas-start offcanva-custome h-100" tabindex="-1" id="SidebarCanva" aria-labelledby="SidebarCanvaLabel">
                <div class="offcanvas-header justify-content-end d-lg-none">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body py-4">
                    <div className='text-center'>
                        <img src={logo} alt="" className='sidebar-logo' />
                    </div>
                    <div class="accordion accordion-flush mt-5 side-bar-dd" id="accordionFlushExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => navigate('/dashboard')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-dashboard" aria-expanded="false" aria-controls="flush-dashboard">
                                    Dashboard
                                </button>
                            </h2>
                            <div id="flush-dashboard" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
                        {userdata?.role?.name != "User" ?
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Partners
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body py-0">
                                        <ul className='sidebar-ul bg-transparent p-0'>
                                            <li className='list-unstyled'><NavLink to={'/allpartners'} onClick={closesidebar}>All Partners</NavLink></li>
                                            <li className='list-unstyled'><NavLink to={'/partner'} onClick={closesidebar}>By Category</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> : ''}
                        {userdata?.role?.name === "Admin" ?
                            <>

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button onClick={() => navigate('/users')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-users" aria-expanded="false" aria-controls="flush-users">
                                            Users
                                        </button>
                                    </h2>
                                    <div id="flush-users" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    </div>

                                </div>
                            </>
                            : ''}

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => navigate('/membership')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-membership" aria-expanded="false" aria-controls="flush-membership">
                                    Membership
                                </button>
                            </h2>
                            <div id="flush-membership" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
                        {userdata?.role?.name === "User" ?
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button onClick={() => navigate('/discounts')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-discounts" aria-expanded="false" aria-controls="flush-discounts">
                                        Discounts
                                    </button>
                                </h2>
                                <div id="flush-discounts" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                </div>

                            </div>
                            : ''}
                        {userdata?.role ?
                            ''
                            : <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button onClick={() => navigate('/mydiscounts')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-Mydiscounts" aria-expanded="false" aria-controls="flush-Mydiscounts">
                                        My Discounts
                                    </button>
                                </h2>
                                <div id="flush-Mydiscounts" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                </div>

                            </div>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar