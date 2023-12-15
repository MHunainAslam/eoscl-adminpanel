import React, { useEffect, useState } from 'react'
import user from '../../assets/images/avatar/user.webp'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
const EditProfile = () => {
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const [Name, setName] = useState('')
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    useEffect(() => {
        axios.get(`${app_url}/api/authMe`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
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
                <div className='d-flex align-items-center'>
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Edit Profile
                    </p>
                </div>

            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <div className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center">
                                {data.image === null ?
                                    <img src={user} class=" user-img" alt="..." /> :
                                    <img src={img_url + data.image?.url} class=" user-img" alt="..." />
                                }
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">

                                
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Full Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Email:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            User Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Role:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Address:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Phone:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile


