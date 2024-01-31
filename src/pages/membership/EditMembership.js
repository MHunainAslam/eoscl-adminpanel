import React, { useEffect, useState } from 'react'
import user from '../../assets/images/null.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Ckeditor from '../../components/Ckeditor'
import { app_url, img_url } from '../../config'
import axios from 'axios'
import toast from 'react-hot-toast'
const EditMembership = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [price, setprice] = useState('')
    const [duration, setduration] = useState('')
    const [status, setstatus] = useState('')
    const [Logo, setLogo] = useState(null)
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
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
        const formDataimg = new FormData();
        formDataimg.append('media', event.target.files[0]);
        setisLoading(true)
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
                    setLogo(response.data.data.last_inserted_id)
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
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        axios.get(`${app_url}/api/memberships/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                settitle(response?.data?.data?.title)
                setprice(response?.data?.data?.price)
                setdesc(response?.data?.data?.description)
                setduration(response?.data?.data?.duration)
                setstatus(response?.data?.data?.status)
                setImage(response?.data?.data?.image ? img_url + response?.data?.data?.image.url : user)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])
    const addmembershipcard = (e) => {
        e.preventDefault()

        setisLoading(true)
        axios.put(`${app_url}/api/memberships/${slug}`, { title: title, description: desc, image: Logo?.toString(), price: price, duration: duration, status: status }, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                setisLoading(false)
                toast.success(response?.data?.message)
            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });

    }

    return (
        <>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <i className="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Edit Membership
                    </p>
                </div>

            </div>
            <div className="row mt-3">
                <div className="card mb-3 c-card user-card" >
                    <form onSubmit={addmembershipcard} className="card-body">
                        <div className="row py-5 ">
                            <div className="col-md-2 text-md-start text-center position-relative">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img ">

                                    {image && <img className="w-100 h-100 object-fit-contain rounded-0" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
                                    <div className="cam-img-change-2 pointer mx-auto" >
                                        <i className="bi bi-camera-fill "></i>
                                    </div>
                                </label>
                            </div>
                            <div className="col-md-8 pt-4 pt-md-0">

                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Membership Type:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" className='form-control inp' value={title} onChange={(e) => settitle(e.target.value)} name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Package Price:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="number" className='form-control inp' value={price} onChange={(e) => setprice(e.target.value)} name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Description:
                                        </p>
                                    </div>
                                    <div className="col  ">
                                        <Ckeditor

                                            name="description"
                                            onChange={(data) => {
                                                setdesc(data);

                                            }}
                                            value={desc}
                                            editorLoaded={editorLoaded}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Membership Duration (Days):
                                        </p>
                                    </div>
                                    <div className="col">

                                        <input type="number" className='form-control inp' value={duration} onChange={(e) => setduration(e.target.value)} name="" id="" />

                                    </div>
                                </div>

                                <div className="d-flex mt-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold">
                                            Status:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="" value={status} onChange={(e) => setstatus(e.target.value)}>
                                            <option value="" hidden>Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-100 text-end' >
                                    <button className='btn primary-btn px-md-5 mt-4' disabled={isLoading} type='submit'>Update {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditMembership



