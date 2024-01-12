import React, { Suspense, useEffect, useState } from 'react'
import nonimg from '../../assets/images/null.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../Loader'
import EditCatModal from '../../pages/partners/EditCatModal'

const PartnerCategory = ({ getcat, AllPartners, isLoading }) => {

    const [isDisable, setisDisable] = useState(false)
    const [Name, setName] = useState('')
    const [id, setid] = useState('')
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const deletecat = (e) => {
        setisDisable(true)
        axios.delete(`${app_url}/api/categories/${e}`, {
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
        getcat()
    }, [isDisable])
    const editdetail = (title, id) => {
        setName(title)
        setid(id)
    }
    return (
        <>
            <div className="row position-relative">
                {isLoading ? <Loader /> :
                    <>
                        {AllPartners?.data?.map((item, i) => (
                            <div className="col-lg-3 col-md-4 col-6 mt-3">
                                <div className='card h-100  c-card vendorscard'>

                                    <div className="card-body  text-center">
                                        <div className='d-flex justify-content-between'>
                                            <Link to={`/partner/${item.id}`} className="heading-m cat-hov  text-capitalize  mb-0 text-p">
                                                {item.name}
                                            </Link>
                                            <i class="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>

                                            <ul class="dropdown-menu">

                                                <>
                                                    <li class="dropdown-item pointer" onClick={() => editdetail(item.name, item.id)} data-bs-toggle="modal" data-bs-target="#EditCategory">Edit</li>
                                                    <li onClick={(e) => deletecat(item.id)} class="dropdown-item pointer">Delete</li>


                                                </>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </>
                }

            </div>
            <EditCatModal getcat={getcat} name={Name} id={id} />
        </>
    )
}

export default PartnerCategory
