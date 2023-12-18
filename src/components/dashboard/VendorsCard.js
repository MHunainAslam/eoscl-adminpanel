import React, { useEffect, useRef, useState } from 'react'
import men1 from '../../assets/images/men/Rectangle 1.png'
import men2 from '../../assets/images/men/Rectangle 2.png'
import men3 from '../../assets/images/men/Rectangle 3.png'
import men4 from '../../assets/images/men/Rectangle 4.png'
import men5 from '../../assets/images/men/Rectangle 5.png'
import men6 from '../../assets/images/men/Rectangle 6.png'
import toast from 'react-hot-toast'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const VendorsCard = () => {
    const [isLoading, setisLoading] = useState(true)
    const [AllPartners, setAllPartners] = useState([])
    const [isDisable, setisDisable] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token

    useEffect(() => {
        axios.get(`${app_url}/api/partners`, {
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
    }, [])
    return (
        <>
            <div className="card c-card h-100 overflow-auto Vendors-Active">
                <div className="card-body px-0" >

                    <p className="heading-m px-lg-4 px-3">
                        Partners
                    </p>
                    <div className="border-bottom"></div>
                    <ul className='px-lg-4 px-3 position-relative' id="myScrollableDiv">
                        {isLoading ? <li> <Loader /> </li> :
                            <>
                                {AllPartners?.data?.map((item, i) => (
                                    <li>
                                        <div className="d-flex align-items-center">
                                            {item.image === null ?
                                                <img src={men1} alt="" /> :
                                                <img src={img_url + item.image.url} className='object-fit-contain' alt="" />
                                            }
                                            <Link className='text-decoration-none text-black' to={`/viewpartner/${item.id}`}>
                                                <p className="para-lg mb-0 text-capitalize">
                                                    {item.company_name}
                                                </p>
                                            </Link>
                                        </div>
                                        <p className='text-s mb-0 text-capitalize'>{item.status}</p>
                                    </li>
                                ))}
                            </>
                        }


                    </ul>

                </div>
            </div>
        </>
    )
}

export default VendorsCard