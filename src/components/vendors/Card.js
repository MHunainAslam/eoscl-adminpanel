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

const Card = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v1} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            35% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v2} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            23% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v3} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            15% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v4} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            30% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v5} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            19% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v6} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            25% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v7} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            35% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v8} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            15% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v9} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            35% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v10} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            18% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v11} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            08% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className='card c-card vendorscard'>

                    <div className="card-body">
                        <div className="d-flex  justify-content-between">
                            <div className='v-logo active'>
                                <img src={v12} alt="" />
                            </div>
                            <div>
                                <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item"  to="/editpartner">Edit</Link></li>
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
                            35% <span className='para-lg text-black'>off</span>
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi placeat, ipsa tempore similique eveniet aliquid quaerat provident distinctio quod eos, sapiente suscipit saepe cupiditate. Ipsa odit aut reiciendis? Exercitationem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card