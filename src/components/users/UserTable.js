import React from 'react'

const UserTable = ({ tabledata, indexOfFirstItem, itemsPerPage }) => {
    const currentData = tabledata.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    return (
        <>
            <div className="table-responsive">
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
                        {currentData?.length === 0 ? <><td colSpan={10}><p className="text-center heading-m mt-3"> No Result Found!</p></td> </> :
                            currentData?.map((item, i) => (
                                <tr>
                                    <td scope="row">{indexOfFirstItem + i + 1}</td>

                                    <td className="text-capitalize"> {item.name}</td>
                                    <td>{item.email}</td>
                                    <td >{item.phone}</td>
                                    <td className="text-capitalize">{item.status}</td>
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
                            ))}







                    </tbody>

                </table>
            </div>
        </>
    )
}

export default UserTable