import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer bg-white py-3 text-center">
                <p className="para text-black mb-0 ">
                    © {new Date().getFullYear()}  Copyrights. EOSCL. All Rights Reserved
                </p>
            </div>
        </>
    )
}

export default Footer