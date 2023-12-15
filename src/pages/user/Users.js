import React, { useEffect, useState } from 'react'
import UserTable from '../../components/users/UserTable'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'
import { app_url } from '../../config'
import axios from 'axios'
import toast from 'react-hot-toast'

const Users = () => {
  const token = JSON.parse(localStorage.getItem('EosclDashboard')).data.token
  // const [tabledata, settabledata] = useState([
  //   { sno: 1, name: 'john doe', email: 'john@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jacob', email: 'Jacob@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Mark', email: 'Mark@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Alex', email: 'Alex@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jack', email: 'Jack@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'john doe', email: 'john@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jacob', email: 'Jacob@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Mark', email: 'Mark@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Alex', email: 'Alex@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jack', email: 'Jack@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'john doe', email: 'john@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jacob', email: 'Jacob@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Mark', email: 'Mark@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Alex', email: 'Alex@gmail.com', phone: '123 123 123', status: 'active' },
  //   { sno: 1, name: 'Jack', email: 'Jack@gmail.com', phone: '123 123 123', status: 'active' },
  // ])
  const [dataOnPage, setdataOnPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = dataOnPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const a = parseInt(itemsPerPage);
  const b = parseInt(indexOfFirstItem);
  const [tabledata, settabledata] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [isDisable, setisDisable] = useState(false)

  useEffect(() => {
    axios.get(`${app_url}/api/users`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        // Handle successful response here
        console.log(response.data);
        settabledata(response?.data?.data)
        setisLoading(false)
      })
      .catch(error => {
        // Handle error here
        console.error(error);
        setisLoading(false)
        toast.error(error?.response?.data?.message)
      });
  }, [isDisable])
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (dataOnPage > tabledata?.length) {
      setdataOnPage(tabledata?.length)
      setCurrentPage(1)
    }
    console.log('lol', dataOnPage, currentPage)
  }, [dataOnPage])

  const updatestatus = (e) => {
    setisDisable(true)
    console.log(e.target.id)
    axios.put(`${app_url}/api/users/${e.target.id}/update-status`, { status: e.target.value }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        // Handle successful response here
        console.log(response.data);
        setisDisable(false)

      })
      .catch(error => {
        // Handle error here
        console.error(error);
        toast.error(error?.response?.data?.message)
        setisDisable(false)

      });
  }
  return (
    <>
      <div className="d-md-flex justify-content-between">

        <p className="heading-m">
          Users
        </p>
        <div className="d-flex justify-content-end h-100 col-md-6">
          <Link to={'/AddNewuser'} className='btn w-50 primary-btn'>Add New User</Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card c-card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-5 mt-3">
                <div className='para d-flex align-items-center'>
                  Show
                  <select className='form-select mx-3' name="" id="" onChange={(e) => setdataOnPage(e.target.value)}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  Entries
                </div>
                <div><input type="text" className='form-control' placeholder="Search" name="" id="" /></div>
              </div>
              <UserTable updatestatus={updatestatus} isDisable={isDisable} isLoading={isLoading} tabledata={tabledata?.data} indexOfFirstItem={indexOfFirstItem} itemsPerPage={itemsPerPage} />
            </div>
            <div className="card-footer">
              <Pagination
                dataOnPage={dataOnPage}
                currentPage={currentPage}
                totalPages={Math.ceil(tabledata?.length / itemsPerPage)}
                tabledata={tabledata?.data}
                onPageChange={handlePageChange}
                indexOfFirstItem={indexOfFirstItem}
                // currentData={currentData}
                itemsPerPage={itemsPerPage}
                indexOfLastItem={indexOfLastItem}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Users