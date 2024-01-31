import React from 'react'
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const UserTable = ({ tabledata, indexOfFirstItem, itemsPerPage, isLoading, updatestatus, isDisable }) => {
    // const currentData = tabledata(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped usertable text-center">
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
                        {isLoading ?
                            <tr>
                                <td className='position-relative rounded-5' colSpan={6}>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr> :
                            <>
                                {tabledata?.data?.length === 0 ? <>
                                    <tr><td className='position-relative rounded-5 py-0' colSpan={10}><p className="text-center heading-m mt-3"> No Result Found!</p></td></tr>
                                </> : tabledata?.data?.map((item, i) => (
                                    <tr key={i}>
                                        <td scope="row">{indexOfFirstItem + i + 1}</td>

                                        <td className="text-capitalize"> {item.name}</td>
                                        <td>{item.email}</td>
                                        <td >{item.phone}</td>
                                        <td className="text-capitalize">{item.status}</td>
                                        <td>
                                            <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to={`/edit-user/${item.id}`} state={item}>Edit</Link></li>
                                                <li><Link className="dropdown-item" to={`/userview/${item.id}`}>View</Link></li>
                                                <li>
                                                    <div className="form-check form-switch dropdown-item justify-content-between d-flex">

                                                        <label className="form-check-label text-capitalize" htmlFor="flexSwitchCheckChecked">{item.status}</label>
                                                        <input className="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />

                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        }






                    </tbody>

                </table>
            </div>
        </>
    )
}

export default UserTable