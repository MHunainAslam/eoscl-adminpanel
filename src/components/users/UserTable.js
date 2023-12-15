import React from 'react'
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const UserTable = ({ tabledata, indexOfFirstItem, itemsPerPage, isLoading, updatestatus, isDisable }) => {
    // const currentData = tabledata(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

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
                        {isLoading ? <tr> <td className='position-relative rounded-5' colSpan={6}> <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div></td></tr> : <>
                            {tabledata?.length === 0 ? <><td colSpan={10}><p className="text-center heading-m mt-3"> No Result Found!</p></td> </> :
                                tabledata?.map((item, i) => (
                                    <tr>
                                        <td scope="row">{indexOfFirstItem + i + 1}</td>

                                        <td className="text-capitalize"> {item.name}</td>
                                        <td>{item.email}</td>
                                        <td >{item.phone}</td>
                                        <td className="text-capitalize">{item.status}</td>
                                        <td>
                                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to={`/edit-user/${item.id}`} state={item}>Edit</Link></li>
                                                <li><Link class="dropdown-item" to={`/userview/${item.id}`}>View</Link></li>
                                                <li>
                                                    <div class="form-check form-switch dropdown-item justify-content-between d-flex">
                                                       
                                                        <label class="form-check-label text-capitalize" for="flexSwitchCheckChecked">{item.status}</label>
                                                        <input class="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                        </>}






                    </tbody>

                </table>
            </div>
        </>
    )
}

export default UserTable