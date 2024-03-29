import React, { useEffect } from 'react'
import user from '../../assets/images/avatar/user.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { app_url } from '../../config'
import toast from 'react-hot-toast'
const AddNewuser = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [PkgPrice, setPkgPrice] = useState('')
    const [UserName, setUserName] = useState('')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Address, setAddress] = useState('')
    const [MembershipId, setMembershipId] = useState('')
    const [Status, setStatus] = useState('')
    const [Password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState('')
    const [Membershipdata, setMembershipdata] = useState('')
    const [image, setImage] = useState(user);
    const [userimg, setuserimg] = useState()

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        const formDataimg = new FormData();
        setisLoading(true)
        formDataimg.append('media', event.target.files[0]);
        reader.onloadend = () => {
            setImage(reader.result);
            axios.post(`${app_url}/api/post-media`, formDataimg, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    setisLoading(false)
                    setuserimg(response.data.data.last_inserted_id)
                })
                .catch(error => {
                    // Handle error here
                    console.error(error);
                    toast.error(error?.response?.data?.message)
                    setisLoading(false)
                });
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
                setMembershipdata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
            });
    }, [])

    const membershipidandpkgprice = (e) => {
        // setMembershipId(e.target.value)
        const selectedId = Number(e.target.value);
        const selectedData = Membershipdata?.data.find(item => item.id === selectedId);
        setPkgPrice(selectedData.price)
    }

    const adduser = (e) => {
        e.preventDefault();
        if (Name === '' || Email === '' || UserName === '' || Password === '' || Phone === '' || Address === '' || MembershipId === '' || Status === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/users`, { username: UserName, name: Name, status: Status, email: Email, role_id: '3', phone: Phone, image: userimg?.toString(), address: Address, membership_id: MembershipId, password: Password }, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    setisLoading(false)
                    toast.success(response.data.message)
                    setName('')
                    setEmail('')
                    setPhone('')
                    setAddress('')
                    setMembershipId('')
                    setPkgPrice('')
                    setStatus('')
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
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i className="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Add New User
                    </p>
                </div>

            </div>
            <div className="row mt-3">
                <div className="card mb-3 c-card user-card" >
                    <form onSubmit={adduser} className="card-body">
                        <div className="row py-5 ">
                            <div className="col-md-2 text-md-start text-center">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img ">

                                    {image && <img className=" user-img object-fit-cover" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}

                                    <div className="cam-img-change-2 pointer mx-auto" >
                                        <i className="bi bi-camera-fill "></i>
                                    </div>
                                </label>

                            </div>
                            <div className="col-md-8 pt-4 pt-md-0">

                                <p className="heading-sm">
                                    User Information</p>
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
                                        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className='inp form-control' name="" id="" />

                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            User Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={UserName} onChange={(e) => setUserName(e.target.value)} className='inp form-control' name="" id="" />

                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Password:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} className='inp form-control' name="" id="" />

                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Phone:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()} value={Phone} onChange={(e) => setPhone(e.target.value)} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Address:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <textarea type="text" value={Address} onChange={(e) => setAddress(e.target.value)} rows={4} className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id={PkgPrice} value={MembershipId} onChange={(e) => { setMembershipId(e.target.value); membershipidandpkgprice(e) ;}}>
                                            <option value="" hidden>Select Memship Type</option>
                                            {Membershipdata?.data?.map((item, i) => (
                                                <option value={item.id} key={i}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Package Price:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={PkgPrice} readOnly className='inp form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="" value={Status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="" hidden>Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-100 text-end' >
                                    <button type='submit' className='btn primary-btn px-md-5 mt-4'>Update {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNewuser