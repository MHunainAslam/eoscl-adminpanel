import React from 'react'

const Loader = () => {
    return (
        <div className='loader'>
            <div>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader