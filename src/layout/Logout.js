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
    }
    return (
        <>


            <div class="modal fade logout-modal" id="LogoutModal" tabindex="-1" aria-labelledby="LogoutModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content back-p">
                        {/* <div class="modal-header">
                            <h1 class="modal-title fs-5" id="LogoutModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div class="modal-body text-center py-3">
                            <p className="heading-m text-white mb-0">
                                Are You Sure?
                            </p>
                        </div>
                        <div class="modal-footer border-0 pb-3 justify-content-center">
                            <button type="button" class="btn rounded-5 px-md-5 btn-outline-light close-modal " data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-light rounded-5 px-md-5 text-p" onClick={logoutUser}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout