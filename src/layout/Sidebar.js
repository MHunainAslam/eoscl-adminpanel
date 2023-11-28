import React from 'react'
import logo from '../assets/images/logo/eoscl-logo.png'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
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
                                <NavLink to={'/dashboard'} className="accordion-button collapsed"   type="button" >
                                    Dashboard
                                </NavLink>
                            </h2>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/vendors'} className="accordion-button collapsed" type="button" >
                                    Vendors
                                </NavLink>
                            </h2>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/Users'} className="accordion-button collapsed" type="button" >
                                    Users
                                </NavLink>
                            </h2>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'#'} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Ecommerce
                                </NavLink>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-0">
                                    <ul className='sidebar-ul'>
                                        <li><NavLink to={'/product'} >Product</NavLink></li>
                                        <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>
                                        <li><NavLink to={'/productlist'}>Product List</NavLink></li>
                                        <li><NavLink to={'/productdetails'}>Product Details</NavLink></li>
                                        <li><NavLink to={'/orderhistory'}>Order History</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <NavLink to={'/orders'} className="accordion-button collapsed" type="button" >
                                    Orders
                                </NavLink>
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar