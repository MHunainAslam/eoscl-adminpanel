import React, { useEffect, useState } from 'react'
import user from '../../assets/images/avatar/user.webp'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../../components/Loader'
const Userview = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const { slug } = useParams()
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`${app_url}/api/user-get-by-id/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setdata(response?.data?.data)
                setisLoading(false)
            })
            .catch(error => {
                // Handle error here
                console.error(error);
                setisLoading(false)
                toast.error(error?.response?.data?.message)
            });
    }, [])

    return (
        <>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        User Profile
                    </p>
                </div>
                <div className="d-flex h-100 col-md-6 justify-content-end">
                    <Link to={`/edit-user/${data.id}`} className='btn w-50 primary-btn me-3'>Edit Profile</Link>
                </div>
            </div>
            <div className="row mt-3 position-relative">
                {isLoading ? <Loader /> :
                    <div class="card mb-3 c-card user-card " >
                        <div className="card-body">
                            <div class="row py-5 ">
                                <div class="col-md-2 text-md-start text-center">
                                    {data.image === null ?
                                        <img src={user} class=" user-img" alt="..." />
                                        :
                                        <img src={img_url + data.image.url} class="object-fit-cover user-img" alt="..." />
                                    }
                                </div>
                                <div class="col-md-8 pt-4 pt-md-0">

                                    <p class="heading-sm">
                                        User Information</p>
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
                                                Phone:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.phone}
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
                                                {data.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                {data.membership?.title}
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Package Price:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                ${data.membership?.price}
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
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Userview

