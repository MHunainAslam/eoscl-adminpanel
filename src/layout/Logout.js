import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import {logout} from '../store/Authaction'
const Logout = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutUser = () => {
        Navigate('/')
        dispatch(logout());
        localStorage.removeItem("EosclDashboard")
        document.querySelector('.close-modal').click()
        window.location.reload(true)
    }
    return (
        <>


            <div className="modal fade logout-modal" id="LogoutModal" tabIndex="-1" aria-labelledby="LogoutModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content back-p">
                        {/* <div className="modal-header">
                            <h1 className="modal-title fs-5" id="LogoutModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body text-center py-3">
                            <p className="heading-m text-white mb-0">
                                Are You Sure?
                            </p>
                        </div>
                        <div className="modal-footer border-0 pb-3 justify-content-center">
                            <button type="button" className="btn rounded-5 px-md-5 btn-outline-light close-modal " data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-light rounded-5 px-md-5 text-p" onClick={logoutUser}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout