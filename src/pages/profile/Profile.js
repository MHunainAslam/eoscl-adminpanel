import React, { useEffect, useState } from 'react'
import user from '../../assets/images/avatar/user.webp'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../../components/Loader'
const Profile = () => {
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    useEffect(() => {
        axios.get(`${app_url}/api/authMe`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                setdata(response.data.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])
    return (
        <>
            <div className="d-md-flex justify-content-between">

                <p className="heading-m">
                    Profile
                </p>
                <div className="d-flex h-100 col-md-6">
                    <Link to={`/edit-profile/${data.id}`} className='btn w-50 primary-btn me-3'>Edit Profile</Link>
                    <Link to={'/changepassword'} className='btn w-50 primary-btn'>Change Password</Link>
                </div>
            </div>
            <div className="row mt-3 position-relative">
                {isLoading ? <Loader /> :
                    <div className="card mb-3 c-card user-card" >
                        <div className="card-body">
                            <div className="row py-5 ">
                                <div className="col-md-2 text-md-start text-center">
                                    {data.image === null ?
                                        <img src={user} className=" user-img" alt="..." /> :
                                        <img src={img_url + data.image?.url} className="object-fit-cover user-img" alt="..." />
                                    }
                                </div>
                                <div className="col-md-8 pt-4 pt-md-0">

                                    <p className="heading-sm">
                                        Personal Information</p>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Full Name:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Email:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                User Name:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.username}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Role:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.role?.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                               Membership Type
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                            {data.membership === null ? '--' : data.membership?.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Status:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.status}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Address:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.address === null ? '--' : data.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Phone:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.phone === null ? '--' : data.phone}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Profile