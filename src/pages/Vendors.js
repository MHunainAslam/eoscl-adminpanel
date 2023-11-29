import React from 'react'
import Card from '../components/vendors/Card'

const Vendors = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="heading-m">
          Vendors
        </p>
        <button className='btn primary-btn  h-100'>Add New Vendor</button>
      </div>

      <Card />
    </>
  )
}

export default Vendors