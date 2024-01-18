import React, { useEffect, useState } from 'react'
import card from '../../assets/images/vendors/Image 5.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import Loader from '../../components/Loader'
import RenewMembership from '../../components/membership/RenewMembership'
const MembershipView = ({ authme }) => {
    const [PkgName, setPkgName] = useState('')
    const [Pkgid, setPkgid] = useState('')
    const [PkgPrice, setPkgPrice] = useState('')

    const BeginnerModal = (title, price, id) => {
        setPkgName(title)
        setPkgPrice(`${price}`)
        setPkgid(id)
    }
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const { slug } = useParams()
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    useEffect(() => {
        axios.get(`${app_url}/api/memberships/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setdata(response?.data?.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])

    const [expirationDate, setExpirationDate] = useState(null);

    useEffect(() => {
        const currentDate = new Date();
        const futureDate = new Date(currentDate.getTime() + (data.duration * 24 * 60 * 60 * 1000)); // Adding 50 days

        setExpirationDate(futureDate);

        const interval = setInterval(() => {
            const now = new Date();
            if (now.getTime() > futureDate.getTime()) {
                clearInterval(interval);
            }
        }, 1000); // Check every second

        return () => {
            clearInterval(interval);
        };
    }, [data]);

    const isExpired = expirationDate && new Date() > expirationDate;

    return (
        <>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Membership Detail
                    </p>
                </div>
                {user?.role?.name === 'User' ?
                    <Link href='#' className='btn primary-btn  h-100' data-bs-toggle="modal" data-bs-target="#VendorModal" onClick={() => BeginnerModal(data?.title, data?.price, data?.id)} >Renew Membership</Link>
                    : ''}

            </div>
            <div className="row position-relative mt-3">
                {isLoading ? <Loader /> :
                    <div class="card mb-3 c-card user-card" >
                        <div className="card-body">
                            <div class="row py-5 ">
                                <div class="col-md-2 text-md-start text-center">
                                    {data.image === null ?
                                        <img src={card} class="rounded-0 object-fit-contain user-img" alt="..." /> :
                                        <img src={img_url + data?.image?.url} class="rounded-0 object-fit-contain user-img" alt="..." />
                                    }
                                </div>
                                <div class="col-md-8 pt-4 pt-md-0">

                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Membership Type:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {data.title}
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
                                                ${data.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Description:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para" dangerouslySetInnerHTML={{ __html: data.description }}>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold">
                                                Expires At:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <p className="para">
                                                {isExpired ?
                                                    'Expired'
                                                    :
                                                    <>
                                                        {expirationDate.toDateString()}
                                                    </>
                                                }
                                                {/* <input type="date" className='form-control inp' name="" id="" /> */}
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
                                                Active
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>


            <RenewMembership PkgName={PkgName} Pkgid={Pkgid} PkgPrice={PkgPrice} authme={authme} />
        </>
    )
}

export default MembershipView