import React from 'react'
import UserTable from '../components/users/UserTable'

const Users = () => {
  return (
    <>
      <p className="heading-m">
        Users
      </p>
      <div className="row">
        <div className="col">
          <div className="card c-card">
            <div className="card-body">
              <UserTable />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Users