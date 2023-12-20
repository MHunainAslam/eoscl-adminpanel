import React from 'react'
import logo from '../assets/images/logo/logo.png'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const closesidebar = () => {
        document.querySelector('.btn-close').click()
    }
    const closeaccordion = () => {

    }
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
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/dashboard'} className="accordion-button collapsed" onClick={closesidebar} type="button" >
                                    Dashboard
                                </NavLink>
                            </h2>
                        </div> */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => navigate('/dashboard')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-dashboard" aria-expanded="false" aria-controls="flush-dashboard">
                                Dashboard
                                </button>
                            </h2>
                            <div id="flush-dashboard" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
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
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => navigate('/users')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-users" aria-expanded="false" aria-controls="flush-users">
                                    Users
                                </button>
                            </h2>
                            <div id="flush-users" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/partner'} className="accordion-button collapsed" onClick={closesidebar} type="button" >
                                    Partner
                                </NavLink>
                            </h2>

                        </div> */}
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/users'} className="accordion-button collapsed" onClick={closesidebar} type="button" >
                                    Users
                                </NavLink>
                            </h2>

                        </div> */}
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => navigate('/membership')} className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-membership" aria-expanded="false" aria-controls="flush-membership">
                                    Membership
                                </button>
                            </h2>
                            <div id="flush-membership" class="d-none accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                            </div>

                        </div>
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/membership'} className="accordion-button collapsed" onClick={closesidebar} type="button" >
                                    Membership
                                </NavLink>
                            </h2>

                        </div> */}
                        {/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Ecommerce
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-0">
                                    <ul className='sidebar-ul'>
                                        <li><NavLink to={'/product'} onClick={closesidebar}>Product</NavLink></li>
                                        <li><NavLink to={'/addproduct'} onClick={closesidebar}>Add Product</NavLink></li>
                                        <li><NavLink to={'/productlist'} onClick={closesidebar}>Product List</NavLink></li>
                                        <li><NavLink to={'/productdetails'} onClick={closesidebar}>Product Details</NavLink></li>
                                        <li><NavLink to={'/orderhistory'} onClick={closesidebar}>Order History</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/orders'} className="accordion-button collapsed" type="button" onClick={closesidebar}>
                                    Orders
                                </NavLink>
                            </h2>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar