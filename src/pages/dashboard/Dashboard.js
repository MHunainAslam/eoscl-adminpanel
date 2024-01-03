import React from 'react'
import DashboardCards from '../../components/dashboard/DashboardCards'
import RevenueChart from '../../components/dashboard/charts/RevenueChart'
import VendorsCard from '../../components/dashboard/VendorsCard'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('EosclDashboard')).data

  return (
    <>
      <p className="heading-m">
        Dashboard
      </p>
      <DashboardCards />
      <div className="row mt-5">
        <div className="col-xl-8 mt-3">
          <RevenueChart />
        </div>
        <div className={` col-xl-4 mt-3`}>
          <VendorsCard />
        </div>
      </div>

    </>
  )
}

export default Dashboard