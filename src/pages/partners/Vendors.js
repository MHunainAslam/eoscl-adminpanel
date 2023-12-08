import React from 'react'
import Card from '../../components/vendors/Card'
import { Link } from 'react-router-dom'

const Vendors = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="heading-m">
          Partners
        </p>
        <Link className='btn primary-btn  h-100' to={'/addpartner'}>Add New Partner</Link>
      </div>

      <Card />
    </>
  )
}

export default Vendors