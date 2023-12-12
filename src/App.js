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

function App() {



  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const getuser = localStorage.getItem("EosclDashboard");
  const usertoken = JSON.parse(getuser);
  if (usertoken) {
    dispatch({ type: "LOGIN", payload: getuser.token });
  }
  return (
    <>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>

        <Routes>




          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forget' element={<Forget />} />


          <Route element={<Routeprivate />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/partner' element={<Vendors />} />
            <Route path='/addpartner' element={<AddVendors />} />
            <Route path='/viewpartner' element={<ViewVendors />} />
            <Route path='/addpartnerdiscount' element={<AddvendorsDiscount />} />
            <Route path='/editpartnerdiscount' element={<EditvendorsDiscount />} />
            <Route path='/editpartner' element={<EditVendors />} />
            <Route path='/users' element={<Users />} />
            <Route path='/userview' element={<Userview />} />
            <Route path='/addnewuser' element={<AddNewuser />} />
            <Route path='/edit-user' element={<Edituser />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/changepassword' element={<Changepassword />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/membershipview' element={<MembershipView />} />
            <Route path='/editmembership' element={<EditMembership />} />
            <Route path='/addmembership' element={<AddMembership />} />
          </Route>



        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
