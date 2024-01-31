import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { app_url } from '../../config'
import axios from 'axios'

const EditCatModal = ({ getcat, name, id }) => {
    const [CatValue, setCatValue] = useState('')
    const [CatName, setCatName] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token

    useEffect(() => {
        setCatName(name)
    }, [name])


    const editcat = (e) => {
        e.preventDefault();

        if (CatName === '') {
            toast.error('All Fields Are Required')
        } else {
            setisLoading(true)
            axios.put(`${app_url}/api/categories/${id}`, { name: CatName, slug: CatName }, {
                headers: {
                    'Authorization': `Bearer ${token}`,

                }
            })
                .then(response => {
                    // Handle successful response here
                    setisLoading(false)
                    toast.success(response?.data?.data)
                    document.querySelector('.closecatmodal').click()
                    setCatName('')
                    getcat()
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
            <button type="button" className="btn btn-primary addcat d-none" data-bs-toggle="modal" data-bs-target="#EditCategory">
                Launch demo modal
            </button>

            <div className="modal fade logout-modal " id="EditCategory" tabIndex="-1" aria-labelledby="EditCategoryLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form onSubmit={editcat} className="modal-content back-p">

                        <div className="modal-body">
                            <p className="heading-m text-white text-center my-3">
                                Edit Category
                            </p>
                            <label htmlFor="" className='para text-white'>Name</label>
                            <input type="text" className='inp form-control py-2' value={CatName} onChange={(e) => setCatName(e.target.value)} placeholder='Ex: All Rounder' name="" id="" />
                            {/* <label htmlFor="" className='para text-white mt-3'>Value</label>
                            <input type="text" className='inp form-control py-2' placeholder='Ex: All-Rounder' value={CatValue} onChange={(e) => setCatValue(e.target.value.replace(/\s/g, ''))} name="" id="" /> */}
                        </div>
                        <div className="modal-footer border-0 justify-content-center my-4">
                            <button type="button" className="btn px-md-4 btn-outline-light rounded-5 closecatmodal" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn px-md-4 btn-light  rounded-5">Update {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCatModal


