import React, { useEffect } from 'react'
import logo from '../assets/images/logo/white-logo.png'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const userdata = JSON.parse(localStorage.getItem('EosclDashboard'))?.data
    const closesidebar = () => {
        document.querySelector('.btn-close').click()
    }
    const closeaccordion = () => {

    }
    useEffect(() => {
        document.querySelector('.btn-close').click()
    }, [navigate])

    return (
        <>


            <div className="offcanvas offcanvas-start offcanva-custome h-100" tabIndex="-1" id="SidebarCanva" aria-labelledby="SidebarCanvaLabel">
                <div className="offcanvas-header justify-content-end d-lg-none">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body py-4">
                    <div className='text-center'>
                        <img src={logo} alt="" className='sidebar-logo' />
                    </div>
                    <div className="accordion accordion-flush mt-5 side-bar-dd" id="accordionFlushExample">

                        {userdata?.role?.name === "Admin" ?
                            <>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button onClick={() => navigate('/dashboard')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-dashboard" aria-expanded="false" aria-controls="flush-dashboard">
                                            Dashboard
                                        </button>
                                    </h2>
                                    <div id="flush-dashboard" className="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    </div>

                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Partners
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body py-0">
                                            <ul className='sidebar-ul bg-transparent p-0'>
                                                <li className='list-unstyled'><NavLink to={'/allpartners'} onClick={closesidebar}>All Partners</NavLink></li>
                                                <li className='list-unstyled'><NavLink to={'/partner'} onClick={closesidebar}>By Category</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </> : ''}
                        {userdata?.role?.name === "Admin" ?
                            <>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button onClick={() => navigate('/users')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-users" aria-expanded="false" aria-controls="flush-users">
                                            Users
                                        </button>
                                    </h2>
                                    <div id="flush-users" className="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                    </div>

                                </div>
                            </>
                            : ''}

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button onClick={() => navigate('/membership')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-membership" aria-expanded="false" aria-controls="flush-membership">
                                    Membership
                                </button>
                            </h2>
                            <div id="flush-membership" className="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
                        {userdata?.role?.name === "User" ?
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button onClick={() => navigate('/discounts')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-discounts" aria-expanded="false" aria-controls="flush-discounts">
                                        Discounts
                                    </button>
                                </h2>
                                <div id="flush-discounts" className="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                </div>

                            </div>
                            : ''}
                        {userdata?.role?.name === 'Vendor' ?
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button onClick={() => navigate('/mydiscounts')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-Mydiscounts" aria-expanded="false" aria-controls="flush-Mydiscounts">
                                        My Discounts
                                    </button>
                                </h2>
                                <div id="flush-Mydiscounts" className="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                </div>

                            </div>
                            : ''}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar