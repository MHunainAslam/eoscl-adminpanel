import React from 'react'
import Card from '../components/vendors/Card'
import { Link } from 'react-router-dom'
import Membershicard from '../components/membership/Membershicard'

const Membership = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <p className="heading-m">
                    Membership
                </p>
                <Link className='btn primary-btn  h-100' to={'/addpartner'}>Add New Vendor</Link>
            </div>

            <Membershicard />
        </>
    )
}

export default Membership
