import logo from './logo.svg';
import './App.css';
import Routeprivate from './store/routeprivate';
import { BrowserRouter, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Test from './pages/Test';
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import Forget from './pages/auth/Forget';
import Dashboard from './pages/dashboard/Dashboard';
import Vendors from './pages/partners/Vendors';
import AddVendors from './pages/partners/AddVendors';
import ViewVendors from './pages/partners/ViewVendors';
import AddvendorsDiscount from './pages/partners/AddvendorsDiscount';
import EditvendorsDiscount from './pages/partners/EditvendorsDiscount';
import EditVendors from './pages/partners/EditVendors';
import Users from './pages/user/Users'
import Userview from './pages/user/Userview'
import AddNewuser from './pages/user/AddNewuser'
import Edituser from './pages/user/Edituser'
import Orders from './pages/Orders'
import Profile from './pages/profile/Profile'
import EditProfile from './pages/profile/EditProfile'
import Changepassword from './pages/profile/Changepassword'
import Notification from './pages/profile/Notification'
import Membership from './pages/membership/Membership'
import MembershipView from './pages/membership/MembershipView';
import EditMembership from './pages/membership/EditMembership';
import AddMembership from './pages/membership/AddMembership';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useRef, useState } from 'react';
import VendorsByCat from './pages/partners/VendorsByCat';
import Allvendors from './pages/partners/Allvendors';
import Discounts from './pages/discounts/Discounts';
import { app_url } from './config';
import axios from 'axios';
import MyDiscounts from './pages/discounts/MyDiscounts';

function App() {
  const [authme, setauthme] = useState('')


  const ref = useRef(null)

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const getuser = localStorage.getItem("EosclDashboard");
  const usertoken = JSON.parse(getuser);
  if (usertoken) {
    dispatch({ type: "LOGIN", payload: getuser?.token });
  }
  useEffect(() => {
    axios.get(`${app_url}/api/authMe`, {
      headers: {
        'Authorization': `Bearer ${usertoken?.data?.token}`,

      }
    })
      .then(response => {
        // Handle successful response here
        setauthme(response)

      })
      .catch(error => {
        // Handle error here
        console.error(error);
      });
  }, [])
  return (
    <>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <BrowserRouter>

        <Routes>




          <Route path='/' element={<Login authme={authme?.data} />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forget' element={<Forget />} />


          <Route element={<Routeprivate />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit-profile/:slug' element={<EditProfile />} />
            <Route path='/changepassword' element={<Changepassword />} />
            {authme?.data?.data?.role?.name === 'Admin' ?
              <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/membership' element={<Membership authme={authme?.data} />} />
                <Route path='/membershipview/:slug' element={<MembershipView />} />
                <Route path='/editmembership/:slug' element={<EditMembership />} />
                <Route path='/addmembership' element={<AddMembership />} />
                <Route path='/allpartners' element={<Allvendors />} />
                <Route path='/partner' element={<Vendors />} />
                <Route path='/partner/:slug' element={<VendorsByCat />} />
                <Route path='/addpartner' element={<AddVendors />} />
                <Route path='/viewpartner/:slug' element={<ViewVendors />} />
                <Route path='/addpartnerdiscount/:slug' element={<AddvendorsDiscount />} />
                <Route path='/editpartnerdiscount/:slug' element={<EditvendorsDiscount />} />
                <Route path='/editpartner/:slug' element={<EditVendors />} />
                <Route path='/users' element={<Users />} />
                <Route path='/userview/:slug' element={<Userview />} />
                <Route path='/addnewuser' element={<AddNewuser />} />
                <Route path='/edit-user/:slug' element={<Edituser />} />
                <Route path='/orders' element={<Orders />} />

                <Route path='/notification' element={<Notification authme={authme?.data} />} />
              </>
              : ''
            }
            {authme?.data?.data?.role?.name === 'Vendor' ?
              <>
                <Route path='/membership' element={<Membership authme={authme?.data} />} />
                <Route path='/membershipview/:slug' element={<MembershipView />} />
                <Route path='/notification' element={<Notification authme={authme?.data} />} />
                <Route path='/mydiscounts' element={<MyDiscounts authme={authme?.data} />} />
                <Route path='/editpartnerdiscount/:slug' element={<EditvendorsDiscount authme={authme?.data} />} />
                <Route path='/addpartnerdiscount/:slug' element={<AddvendorsDiscount authme={authme?.data} />} />
              </>
              : ''
            }
            {authme?.data?.data?.role?.name === 'User' ?
              <>
                <Route path='/discounts' element={<Discounts authme={authme?.data} />} />
                <Route path='/membership' element={<Membership authme={authme?.data} />} />
                <Route path='/membershipview/:slug' element={<MembershipView authme={authme?.data} />} />

              </>
              : ''
            }







          </Route>



        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
