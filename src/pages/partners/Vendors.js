import React, { useEffect, useState } from 'react'
import Card from '../../components/vendors/Card'
import { Link } from 'react-router-dom'
import PartnerCategory from '../../components/vendors/PartnerCategory'
import AddCatModal from './AddCatModal'
import { app_url } from '../../config'
import axios from 'axios'
import toast from 'react-hot-toast'

const Vendors = () => {
  const [isLoading, setisLoading] = useState(true)
  const [AllPartners, setAllPartners] = useState([])
  const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
  const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
  const getcat = () => {
    axios.get(`${app_url}/api/categories`, {
      headers: {
        'Authorization': `Bearer ${token}`,

      }
    })
      .then(response => {
        // Handle successful response here
        setisLoading(false)
        setAllPartners(response.data)

      })
      .catch(error => {
        // Handle error here
        console.error(error);
        toast.error(error?.response?.data?.message)
        setisLoading(false)
      });
  }
  useEffect(() => {
    getcat()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="heading-m">
          Category
        </p>
        {user?.role?.name === 'Admin' ?
          <button className='btn primary-btn  h-100' data-bs-toggle="modal" data-bs-target="#AddCategory">Add New Category</button>
          : ''}
      </div>

      <PartnerCategory getcat={getcat} isLoading={isLoading} AllPartners={AllPartners} />
      <AddCatModal getcat={getcat} />
    </>
  )
}

export default Vendors