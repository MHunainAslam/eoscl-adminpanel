import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { app_url } from '../../config'
import axios from 'axios'

const EditCatModal = ({ getcat, name, id }) => {
    const [CatValue, setCatValue] = useState('')
    const [CatName, setCatName] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token

    console.log(name, CatName)
    useEffect(() => {
        setCatName(name)
        console.log(name, 'll')
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
                    console.log(response.data);
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
            <button type="button" class="btn btn-primary addcat d-none" data-bs-toggle="modal" data-bs-target="#EditCategory">
                Launch demo modal
            </button>

            <div class="modal fade logout-modal " id="EditCategory" tabindex="-1" aria-labelledby="EditCategoryLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <form onSubmit={editcat} class="modal-content back-p">

                        <div class="modal-body">
                            <p className="heading-m text-white text-center my-3">
                                Edit Category
                            </p>
                            <label htmlFor="" className='para text-white'>Name</label>
                            <input type="text" className='inp form-control py-2' value={CatName} onChange={(e) => setCatName(e.target.value)} placeholder='Ex: All Rounder' name="" id="" />
                            {/* <label htmlFor="" className='para text-white mt-3'>Value</label>
                            <input type="text" className='inp form-control py-2' placeholder='Ex: All-Rounder' value={CatValue} onChange={(e) => setCatValue(e.target.value.replace(/\s/g, ''))} name="" id="" /> */}
                        </div>
                        <div class="modal-footer border-0 justify-content-center my-4">
                            <button type="button" class="btn px-md-4 btn-outline-light rounded-5 closecatmodal" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn px-md-4 btn-light  rounded-5">Add {isLoading ? <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCatModal


