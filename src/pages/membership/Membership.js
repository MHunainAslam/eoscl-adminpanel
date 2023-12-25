import React from 'react'
import Card from '../../components/vendors/Card'
import { Link } from 'react-router-dom'
import Membershicard from '../../components/membership/Membershicard'
import UserMembershipcard from '../../components/membership/UserMembershipcard'

const Membership = ({ authme }) => {
    const userdata = JSON.parse(localStorage.getItem('EosclDashboard'))?.data
    return (
        <>
            <div className="d-flex justify-content-between">
                <p className="heading-m">
                    Membership
                </p>
                {userdata?.role?.name === "Admin" ?
                    <Link className='btn primary-btn  h-100' to={'/addmembership'}>Add New Membership</Link> : ''
                }
            </div>
            {userdata?.role?.name === "User" ?
                <UserMembershipcard authme={authme} />
                :
                <Membershicard />

            }    </>
    )
}

export default Membership
