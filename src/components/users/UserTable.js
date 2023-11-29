import React from 'react'

const UserTable = () => {
    return (
        <>
            <div className="d-flex justify-content-between mb-5 mt-3">
                <div className='para d-flex align-items-center'>
                    Show
                    <select className='form-select mx-3' name="" id="">
                        <option value="">10</option>
                    </select>
                    Entries
                    </div>
                <div><input type="text" className='form-control' placeholder="Search" name="" id="" /></div>
            </div>
            <table class="table table-striped usertable text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Jacob@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Mark@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>Jacob@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Mark</td>
                        <td>Mark@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Jacob</td>
                        <td>Jacob@gmail.com</td>
                        <td>123 456 789</td>
                        <td>Active</td>
                        <td>
                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">View</a></li>
                                <li>
                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                                        <input class="form-check-input mx-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>

                </tbody>

            </table>
        </>
    )
}

export default UserTable