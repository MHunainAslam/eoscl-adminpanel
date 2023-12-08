import React, { useState } from 'react'
import user from '../../assets/images/men/Rectangle 1.png'
import { useNavigate } from 'react-router'
const Notification = () => {
    const navigate = useNavigate()
    const backforward = () => {
        navigate(-1)
    }
    const [image, setImage] = useState(user);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className="d-flex align-items-center">
                <i class="bi bi-arrow-left-circle-fill fs-4 me-3 pointer" onClick={backforward}></i>
                <p className="heading-m mb-0">
                    Notifications
                </p>
            </div>
            <div className="row mt-3">
                <div className="card c-card">
                    <div className="card-body px-0">
                        <div class="card my-4 bg-transpatent border-0" >
                            <div class="d-flex justify-content-center g-0">
                                <div class="col-md-2x">
                                    <div className="noti-btn-icon-lg mt-2 me-3 " >
                                        <i class="bi bi-bell-fill fs-5"></i>
                                    </div>
                                </div>
                                <div class="col-md c-card user-card">
                                    <div class="card-body ">
                                        <p class="card-text text-d para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin tis gravida dolor sit amet is to accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
                                        <div className='d-flex justify-content-between'>
                                            <span class="para-m text-l">Read</span>
                                            <span class="para-m text-l">Last updated 3 mins ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card my-4 bg-transpatent border-0" >
                            <div class="d-flex justify-content-center g-0">
                                <div class="col-md-2x">
                                    <div className="noti-btn-icon-lg mt-2 me-3 " >
                                        <i class="bi bi-bell-fill fs-5"></i>
                                    </div>
                                </div>
                                <div class="col-md c-card user-card">
                                    <div class="card-body ">
                                        <p class="card-text text-d para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin tis gravida dolor sit amet is to accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
                                        <div className='d-flex justify-content-between'>
                                            <span class="para-m ">Unread</span>
                                            <span class="para-m text-l">Last updated 3 mins ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification

