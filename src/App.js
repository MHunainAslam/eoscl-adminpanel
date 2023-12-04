import logo from './logo.svg';
import './App.css';
import Routeprivate from './store/routeprivate';
import { BrowserRouter, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Test from './pages/Test';
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Changepassword from './pages/Changepassword';
import Notification from './pages/Notification';
import AddVendors from './pages/AddVendors';
import ViewVendors from './pages/ViewVendors';
import AddvendorsDiscount from './pages/AddvendorsDiscount';
import EditVendors from './pages/EditVendors';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>

        <Routes>




          <Route path='/' element={<Login />} />
          <Route element={<Routeprivate />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/addvendors' element={<AddVendors />} />
            <Route path='/viewvendors' element={<ViewVendors />} />
            <Route path='/addvendorsdiscount' element={<AddvendorsDiscount />} />
            <Route path='/editvendors' element={<EditVendors />} />
            <Route path='/users' element={<Users />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/changepassword' element={<Changepassword />} />
            <Route path='/notification' element={<Notification />} />
          </Route>



        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
