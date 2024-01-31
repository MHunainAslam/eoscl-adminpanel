// src/components/PrivateRoute.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import LoadingBar from "react-top-loading-bar";


const Routeprivate = ({ path, ...rest }) => {
  const [progress, setProgress] = useState(100)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? (
    <><LoadingBar color='#f11946' progress={progress}
      onLoaderFinished={() => setProgress(0)} />
      <div className="container-fluid min-vh-100 ">
        <div className="row  ">
          <div className="col-lg-3 col-xl-2 px-0 sidebar-sticky">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-xl-10 px-0 bg-light main-content">
            <Header />
            <div className="wrapper">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  ) : (

    <Navigate to="/" />

  );
};

export default Routeprivate;
