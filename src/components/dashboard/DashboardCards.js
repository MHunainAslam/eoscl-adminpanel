import React from 'react'
import user from '../../assets/images/avatar/Icon awesome-user-alt.png'
import Vendoricon from './icons/Vendoricon'
import Usericon from './icons/Usericon'
import Sales from './icons/Sales'
const DashboardCards = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body py-4 text-center">
                        <div className="img mx-auto mb-3">
                            <Usericon />
                        </div>
                        <p className="heading-m mb-1">600<sup> <span className='heading-sm'>+</span></sup></p>
                        <p className="heading-sm">Number of Users</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body py-4 text-center">
                        <div className="img mx-auto mb-3">
                            <Vendoricon />
                        </div>
                        <p className="heading-m mb-1">200<sup> <span className='heading-sm'>+</span></sup></p>
                        <p className="heading-sm">Number of Vendors</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
                <div className="card m-card">
                    <div className="card-body py-4 text-center">
                        <div className="img mx-auto mb-3">
                            <Sales />
                        </div>
                        <p className="heading-m mb-1">500<sup> <span className='heading-sm'>+</span></sup></p>
                        <p className="heading-sm">Number of Sales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards