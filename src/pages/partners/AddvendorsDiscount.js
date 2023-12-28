import React, { useEffect, useState } from 'react'
import user from '../../assets/images/vendors/Rectangle 20.png'
import { useNavigate, useParams } from 'react-router'
import { app_url } from '../../config'
import axios from 'axios'
import toast from 'react-hot-toast'
const AddvendorsDiscount = ({ authme }) => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [partner_id, setpartner_id] = useState('')
    const [membership_id, setmembership_id] = useState('')
    const [discount, setdiscount] = useState('')
    const [logo, setlogo] = useState('')
    const [description, setdescription] = useState('')
    const [status, setstatus] = useState('')
    const [data, setdata] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const { slug } = useParams()
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [image, setImage] = useState(user);

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
    useEffect(() => {
        axios.get(`${app_url}/api/memberships`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
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
    const addpartnerdiscount = (e) => {
        e.preventDefault();
        if (membership_id === '' || discount === '' || description === '' ) {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/partner-details`, { partner_id: slug, membership_id: membership_id, discount: discount, image: '0', description: description, status: 'inactive' }, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    console.log(response.data);
                    setisLoading(false)
                    toast.success(response.data.message)
                    setpartner_id('')
                    setmembership_id('')
                    setdiscount('')
                    setdescription('')
                    setstatus('')
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoading(false)
                });
        }
    }
    return (
        <>
            <div className="d-flex align-items-center">
                <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Add Discount
                </p>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <form onSubmit={addpartnerdiscount} className="card-body">
                        <div class="row py-5 ">
                            {/* <div class="col-md-2 text-md-start text-center position-relative">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img ">

                                    {image && <img class="w-100 h-100 object-fit-cover rounded-0" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
                                    <div className="cam-img-change-2 pointer mx-auto" >
                                        <i class="bi bi-camera-fill "></i>
                                    </div>
                                </label>
                            </div> */}
                            <div class="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="" value={membership_id} onChange={(e) => setmembership_id(e.target.value)}>
                                            <option value="" hidden>Select Card Type</option>
                                            {data?.data?.map((item, i) => (
                                                <option value={item.id}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Discount:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="number" className='form-control inp shadow-sm' name="" id="" value={discount} onChange={(e) => setdiscount(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex  my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Description:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <textarea type="text" className='form-control tarea shadow-sm' name="" rows={5} id="" value={description} onChange={(e) => setdescription(e.target.value)} />
                                    </div>
                                </div>
                                {authme?.data?.role?.name === 'Admin' ?
                                    <div className="d-flex align-items-center my-3">
                                        <div className="col-md-3 col-4">
                                            <p className="para fw-bold mb-0">
                                                Status:
                                            </p>
                                        </div>
                                        <div className="col">
                                            <select name="" className='form-select inp' id="" value={status} onChange={(e) => setstatus(e.target.value)} >
                                                <option value="" hidden>Select Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    : ''}
                                <div className='w-100 text-end' >
                                    <button type='submit' className='btn primary-btn px-md-5 mt-4'>Update {isLoading ? <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddvendorsDiscount

