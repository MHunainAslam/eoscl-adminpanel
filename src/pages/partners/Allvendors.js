import React from 'react'
import Card from '../../components/vendors/Card'
import { Link, useNavigate } from 'react-router-dom'
import PartnerCategory from '../../components/vendors/PartnerCategory'
import AllVendorsCard from '../../components/vendors/AllVendorsCard'

const Allvendors = () => {
    const user = JSON.parse(localStorage.getItem('EosclDashboard')).data
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    return (
        <>

            <div className="d-flex justify-content-between">

                <p className="heading-m mb-0">
                    Partner
                </p>
                {user?.role?.name === "Admin" ?
                    <Link className='btn primary-btn  h-100' to={'/addpartner'}>Add New Partner</Link> : ""}
            </div>

            <AllVendorsCard />
        </>
    )
}

export default Allvendors
