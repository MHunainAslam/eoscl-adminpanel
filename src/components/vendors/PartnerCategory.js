import React, { Suspense, useEffect, useState } from 'react'
import nonimg from '../../assets/images/null.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const PartnerCategory = () => {
    const [isLoading, setisLoading] = useState(true)
    const [AllPartners, setAllPartners] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const updatestatus = (e) => {
        setisDisable(true)
        console.log(e.target.id)
        axios.put(`${app_url}/api/partners/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisDisable(false)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisDisable(false)

            });
    }
    useEffect(() => {
        axios.get(`${app_url}/api/categories`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setAllPartners(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [isDisable])

    return (
        <div className="row position-relative">
            {isLoading ? <Loader /> :
                <>
                    {AllPartners?.data?.map((item, i) => (
                        <div className="col-lg-3 col-md-4 col-6 mt-3">
                            <div className='card h-100  c-card vendorscard'>

                                <div className="card-body  text-center">
                                    <Link to={`/partner/${item.id}`} className="heading-m cat-hov  text-capitalize  mb-0 text-p">
                                        {item.name}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </>
            }


        </div>
    )
}

export default PartnerCategory
