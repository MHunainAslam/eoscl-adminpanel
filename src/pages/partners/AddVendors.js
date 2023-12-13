import React, { useState } from 'react'
import user from '../../assets/images/vendors/Rectangle 20.png'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { app_url } from '../../config'
import toast from 'react-hot-toast'
const AddVendors = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [CompanyName, setCompanyName] = useState('')
    const [DiscountUpto, setDiscountUpto] = useState('')
    const [Logo, setLogo] = useState(null)
    const [isLoading, setisLoading] = useState('')
    const [Desc, setDesc] = useState('')
    const [Status, setStatus] = useState('')
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [image, setImage] = useState(user);

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
                    console.log(response.data);
                    setisLoading(false)
                    setLogo(response.data.data.file_path)
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


    const addpartner = (e) => {
        e.preventDefault();

        if (CompanyName === '' || DiscountUpto === '' || Desc === '' || Status === '' || Logo === null) {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.post(`${app_url}/api/partners`, { company_name: CompanyName, discount_upto: DiscountUpto, image: Logo.toString(), description: Desc, status: Status }, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    console.log(response.data);
                    setisLoading(false)
                    toast.success(response.data.message)
                    setCompanyName('')
                    setDiscountUpto('')
                    setDesc('')
                    setStatus('')
                    setLogo(null)
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
                    Add Partners
                </p>
            </div>
            <div className="row mt-3">
                <div class="card mb-3 c-card user-card" >
                    <form onSubmit={addpartner} className="card-body">
                        <div class="row py-5 ">
                            <div class="col-md-2 text-md-start text-center position-relative">
                                <input type="file" className='d-none' name="" id="userimg" onChange={handleImageChange} />
                                <label htmlFor='userimg' className="user-img ">

                                    {image && <img class="w-100 h-100 object-fit-cover rounded-0" src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
                                    <div className="cam-img-change-2 pointer mx-auto" >
                                        <i class="bi bi-camera-fill "></i>
                                    </div>
                                </label>
                            </div>
                            <div class="col-md-8 pt-4 pt-md-0">


                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Company Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Discount Upto:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={DiscountUpto} onChange={(e) => setDiscountUpto(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex  my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Description:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <textarea type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className='form-control tarea shadow-sm' name="" rows={5} id="" />
                                    </div>
                                </div>
                                <div className="d-flex  my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
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
                                    <button className='btn primary-btn px-md-5 mt-4' disabled={isLoading} type='submit'>Update {isLoading ? <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddVendors
