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

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>




          <Route path='/' element={<Test />} />
          <Route element={<Routeprivate />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/users' element={<Users />} />
            <Route path='/orders' element={<Orders />} />
          </Route>



        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
