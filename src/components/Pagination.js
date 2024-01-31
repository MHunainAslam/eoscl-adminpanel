import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    indexOfFirstItem,
    tabledata

}) => {
    const a = parseInt(itemsPerPage);
    const b = parseInt(indexOfFirstItem);
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    const activeIndex = pageNumbers.indexOf(currentPage);

    const startIndex = Math.max(0, activeIndex - 2);
    const endIndex = Math.min(pageNumbers.length - 1, startIndex + 3);
    const buttonsToDisplay = pageNumbers?.slice(startIndex, endIndex + 1);

    return (
        <div className="d-sm-flex justify-content-between align-items-center mt-5 mb-3 text-center">
            <p className="para mb-sm-0">
                Showing Products  <b>{tabledata?.data?.length > 0 ? indexOfFirstItem + 1 : 0} </b> -
                <b>
                    {a + b > tabledata?.data?.length
                        ? tabledata?.total
                        : a + b} &nbsp;
                </b>
                Of <b>{tabledata?.total}</b> Results
            </p>
            <div >
                <ul className="pagination p-0 m-0 justify-content-center">
                    <li className="page-item my-auto">
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="bg-transparent border-0"
                        >
                            <i className="bi bi-caret-left-fill"></i>
                        </button>
                    </li>
                    {buttonsToDisplay.map((pageNumber, i) => (
                        <NavLink
                            key={i}
                            onClick={() => onPageChange(pageNumber)}
                            href="#"
                            className={`pagination-btn ${pageNumber === currentPage ? "page-active" : ""}`}
                        >
                            <li>
                                <button className="">{pageNumber}</button>
                            </li>
                        </NavLink>
                    ))}
                    <li className="page-item my-auto">
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="bg-transparent border-0"
                        >
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                        {/* <li>  <button onClick={() => onPageChange(currentPage + 1, indexOfLastItem)} > <img src={next} alt="icon" /></button> */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;
