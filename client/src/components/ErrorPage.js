import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div id="notfound ">
                <div className="notfound d-flex justify-content-center align-items-center flex-column mt-5 ">
                    <div className="notfound-404 ">
                        <h1>404</h1>
                    </div>
                    <h2>We are Sorry ,Page not found </h2>
                <p className="mb-5">
                    The page you are looking for might have been remove had its name changed or is temporarily unlaible 
                </p>
                <NavLink to="/" className=" btn btn-outline-success ">back to HomePage</NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
