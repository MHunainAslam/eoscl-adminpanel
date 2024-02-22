import React, { useEffect, useState } from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import cardimg from '../../assets/images/null.png'
import { app_url, img_url } from '../../config'
import axios from 'axios'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
const ViewVendors = (state) => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    const [image, setImage] = useState(user);
    const [isDisable, setisDisable] = useState(false)
    const [isLoading, setisLoading] = useState(true);
    const [data, setdata] = useState([]);
    const { slug } = useParams()
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const location = useLocation()
    const logo = location.state;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const updatestatus = (e) => {
        setisDisable(true)
        axios.put(`${app_url}/api/partner-details/${e.target.id}/update-status`, { status: e.target.value }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
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
        axios.get(`${app_url}/api/partner-details/${slug}/parent`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                console.log(response);
                setdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message + 'lol')
                setisLoading(false)
            });
    }, [isDisable])
    return (
        <>
            <div className="d-md-flex justify-content-between">

                <div className="d-flex align-items-center">
                    <i className="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Partners Detail
                    </p>
                </div>
                {user?.role?.name === 'Admin' ?
                    <div className="d-flex justify-content-end h-100  col-md-6">
                        <Link to={`/addpartnerdiscount/${slug}`} className='btn w-50 primary-btn me-3'>Add Discount</Link>
                    </div>
                    : ''}
            </div>
            <div className="row position-relative">
                {isLoading ? <Loader /> :


                    <>
                        {data.data.length === 0 ?
                            <p className='heading-sm my-5 text-center'>No Discounts Found!</p>
                            : <>
                                {data.data.map((item, i) => (
                                    <div className="col-lg-4 col-md-6 mt-3" key={i}>
                                        <div className='card c-card vendorscard'>
                                            <div className="card-body">
                                                <div className="d-flex  justify-content-between">
                                                    <div className={`v-logo ${item.status === 'active' ? 'active' : ''} `}>
                                                        {logo === null ?
                                                            <img src={cardimg} alt="" />
                                                            :
                                                            <img src={img_url + logo?.url} alt="" />
                                                        }
                                                    </div>
                                                    {user?.role?.name === 'Admin' ?
                                                        <div>
                                                            <i className="bi bi-three-dots-vertical fs-3 nav-link" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                            <ul className="dropdown-menu">
                                                                <li><Link className="dropdown-item" to={`/editpartnerdiscount/${item.id}`} state={item.partner_id}>Edit</Link></li>

                                                                <li>
                                                                    <div className="form-check form-switch dropdown-item justify-content-between d-flex">
                                                                        <label className="form-check-label text-capitalize" htmlFor={item.id}>{item.status}</label>
                                                                        <input className="form-check-input mx-0" disabled={isDisable} checked={item.status === 'active'} id={item.id} value={item.status === 'active' ? 'inactive' : 'active'} onChange={updatestatus} type="checkbox" role="switch" />
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        : ''}
                                                </div>
                                                <p className="heading-m text-s">
                                                    {item.discount}%
                                                    <span className='para-lg text-black'>off</span>
                                                </p>
                                                <p className="heading-m text-s">
                                                     {item?.membership?.title}
                                                   
                                                </p>
                                                <p className="para text-capitalize">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>}
                    </>
                }

            </div>
        </>
    )
}

export default ViewVendors

