import React from 'react'
import Card from '../../components/vendors/Card'
import { Link, useNavigate } from 'react-router-dom'
import PartnerCategory from '../../components/vendors/PartnerCategory'

const VendorsByCat = () => {
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    return (
        <>

            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                    <p className="heading-m mb-0">
                        Partner
                    </p>
                </div>
                {user?.role?.name === "Admin" ?
                    <Link className='btn primary-btn  h-100' to={'/addpartner'}>Add New Partner</Link>
                    : ''}
            </div>

            <Card />
        </>
    )
}

export default VendorsByCat
