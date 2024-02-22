import React, { useEffect, useState } from 'react'
import user from '../../assets/images/avatar/Icon awesome-user-alt.png'
import Vendoricon from './icons/Vendoricon'
import Usericon from './icons/Usericon'
import Sales from './icons/Sales'
import axios from 'axios'
import { app_url } from '../../config'
import toast from 'react-hot-toast'
const DashboardCards = () => {
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    useEffect(() => {
        axios.get(`${app_url}/api/dashboard-analytics`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                setdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body  text-center">
                        <div className="img mx-auto mb-3">
                            <Usericon />
                        </div>
                        <p className="heading-m mb-1">{data?.data?.user_count}</p>
                        <p className="heading-sm mb-0">Number of Users</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body  text-center">
                        <div className="img mx-auto mb-3">
                            <Vendoricon />
                        </div>
                        {/* <p className="heading-m mb-1">200<sup> <span className='heading-sm'>+</span></sup></p> */}
                        <p className="heading-m mb-1">{data?.data?.vendor_count} </p>
                        <p className="heading-sm mb-0">Number of Partners</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body  text-center">
                        <div className="img mx-auto mb-3">
                            <Sales />
                        </div>
                        <p className="heading-m mb-1">{data?.data?.sale_count} </p>
                        <p className="heading-sm mb-0">Number of Sales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards