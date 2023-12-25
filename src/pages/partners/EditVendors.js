import React, { useEffect, useState } from 'react'
import user from '../../assets/images/null.png'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { app_url, img_url } from '../../config'
import toast from 'react-hot-toast'
import AddCatModal from './AddCatModal'
const EditVendors = () => {
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
    const [data, setdata] = useState()
    const [CompanyName, setCompanyName] = useState('')
    const [DiscountUpto, setDiscountUpto] = useState('')
    const [Logo, setLogo] = useState(null)
    const [isLoading, setisLoading] = useState('')
    const [Desc, setDesc] = useState('')
    const [Status, setStatus] = useState('')
    const [email, setemail] = useState('')
    const [Category, setCategory] = useState('')
    const [Categorydata, setCategorydata] = useState('')
    const navigate = useNavigate()
    const { slug } = useParams()
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
        axios.get(`${app_url}/api/categories`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setCategorydata(response.data)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message + 'lol')
                setisLoading(false)
            });
    }, [])
    useEffect(() => {
        if (Category === 'addcat') {
            console.log("jhh");
            document.querySelector('.addcat').click()
            setCategory('')
        }
    }, [Category])
    useEffect(() => {
        axios.get(`${app_url}/api/partners/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,

            }
        })
            .then(response => {
                // Handle successful response here
                console.log(response.data);
                setisLoading(false)
                setdata(response.data)
                setCompanyName(response?.data?.data?.company_name)
                setDiscountUpto(response?.data?.data?.discount_upto)
                setDesc(response?.data?.data?.description)
                setStatus(response?.data?.data?.status)
                setImage(response?.data?.data?.image ? img_url + response?.data?.data?.image.url : user)

            })
            .catch(error => {
                // Handle error here
                console.error(error);
                toast.error(error?.response?.data?.message)
                setisLoading(false)
            });
    }, [])

    const addpartner = (e) => {
        e.preventDefault();

        // if (CompanyName === '' || DiscountUpto === '' || Desc === '' || Status === '' || Logo === null) {
        //     toast.error('All Fields Are Required')
        // } else {
        setisLoading(true)
        axios.put(`${app_url}/api/partners/${slug}`, { category_id: Category, company_name: CompanyName, discount_upto: DiscountUpto, image: Logo?.toString(), description: Desc, status: Status, email: email }, {
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
        // }
    }
    return (
        <>
            <div className="d-flex align-items-center">
                <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Edit Partner
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
                                            Company Name:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="col-md-3 col-4">
                                        <p className="para fw-bold mb-0">
                                            Discount Upto:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <input type="number" value={DiscountUpto} onChange={(e) => setDiscountUpto(e.target.value)} className='form-control inp shadow-sm' name="" id="" />
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
                                            Category:
                                        </p>
                                    </div>
                                    <div className="col">
                                        <select name="" className='form-select inp' id="" value={Category} onChange={(e) => { setCategory(e.target.value) }}>
                                            <option value="" hidden>Select Category</option>
                                            {Categorydata?.data?.map((item, i) => (
                                                <option value={item.id}>{item.name}</option>
                                            ))}
                                            <option value={'addcat'}> Add Category</option>

                                        </select>
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
            <AddCatModal />
        </>
    )
}

export default EditVendors



