import React, { useRef } from 'react'
import men1 from '../../assets/images/men/Rectangle 1.png'
import men2 from '../../assets/images/men/Rectangle 2.png'
import men3 from '../../assets/images/men/Rectangle 3.png'
import men4 from '../../assets/images/men/Rectangle 4.png'
import men5 from '../../assets/images/men/Rectangle 5.png'
import men6 from '../../assets/images/men/Rectangle 6.png'

const VendorsCard = () => {
    
    return (
        <>
            <div className="card c-card h-100 overflow-auto Vendors-Active">
                <div className="card-body px-0" >
                    <p className="heading-m px-lg-4 px-3">
                        Partners
                    </p>
                    <div className="border-bottom"></div>
                    <ul className='px-lg-4 px-3' id="myScrollableDiv">
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men1} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men2} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men3} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men4} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men5} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men6} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men1} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men6} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men1} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men6} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <img src={men1} alt="" />
                                <p className="para-lg mb-0">
                                    Francesca Metts
                                </p>
                            </div>
                            <p className='text-s mb-0'>Active</p>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </>
    )
}

export default VendorsCard