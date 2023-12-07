import React from 'react'
import v1 from '../../assets/images/vendors/Rectangle 12.png'
import v2 from '../../assets/images/vendors/Rectangle 14.png'
import v3 from '../../assets/images/vendors/Rectangle 16.png'
import v4 from '../../assets/images/vendors/Rectangle 18.png'
import v5 from '../../assets/images/vendors/Rectangle 20.png'
import v6 from '../../assets/images/vendors/Rectangle 23.png'
import v7 from '../../assets/images/vendors/Rectangle 24.png'
import v8 from '../../assets/images/vendors/Rectangle 26.png'
import v9 from '../../assets/images/vendors/Rectangle 28.png'
import v10 from '../../assets/images/vendors/Rectangle 31.png'
import v11 from '../../assets/images/vendors/Rectangle 32.png'
import v12 from '../../assets/images/vendors/Rectangle 34.png'
import { Link } from 'react-router-dom'

const Membershicard = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard h-100'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v1} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/editpartner">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="/viewpartner">View</Link></li>
                                    <li>
                                        <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                            <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="heading-m text-s">
                            Beginner
                        </p>
                        <p className='para-lg text-black'>$100,000</p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard h-100'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v2} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/editpartner">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="/viewpartner">View</Link></li>
                                    <li>
                                        <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                            <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="heading-m text-s">
                            Premier
                        </p>
                        <p className='para-lg text-black'>$150,000</p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard h-100'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v3} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/editpartner">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="/viewpartner">View</Link></li>
                                    <li>
                                        <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                            <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="heading-m text-s">
                            Elite
                        </p>
                        <p className='para-lg text-black'>$200,000</p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Membershicard
