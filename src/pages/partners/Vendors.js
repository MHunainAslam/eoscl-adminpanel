import React from 'react'
import Card from '../../components/vendors/Card'
import { Link } from 'react-router-dom'
import PartnerCategory from '../../components/vendors/PartnerCategory'
import AddCatModal from './AddCatModal'

const Vendors = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="heading-m">
          Category
        </p>
        <button className='btn primary-btn  h-100' data-bs-toggle="modal" data-bs-target="#AddCategory">Add New Category</button>
      </div>

      <PartnerCategory />
      <AddCatModal />
    </>
  )
}

export default Vendors