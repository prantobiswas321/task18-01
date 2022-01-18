import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <h2 className="fw-bold header-text-color"><span className='text-warning'>C</span>ontact<span className='text-danger'>L</span>ist</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-4 fw-bold navbar-nav">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item navLinks">
                                <NavLink style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        // margin: "1rem 0",
                                        color: isActive ? "red" : "yellow"
                                    };
                                }}
                                    className="me-3 text-decoration-none" to="/home" >Home</NavLink>
                            </li>

                            {/* <li className="nav-item navLinks">
                                <NavLink className="me-3 text-decoration-none" to="/login" style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        // margin: "1rem 0",
                                        color: isActive ? "red" : "yellow"
                                    };
                                }}>Login</NavLink>
                            </li> */}

                            {/* <li className="nav-item navLinks">
                                <NavLink className="me-3 text-decoration-none" to="/Register" style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        // margin: "1rem 0",
                                        color: isActive ? "red" : "yellow"
                                    };
                                }} >Register</NavLink>
                            </li> */}


                            {
                                !user.email &&
                                <li className="nav-item navLinks">
                                    <NavLink className="me-3 text-decoration-none" to="/Register" style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            // margin: "1rem 0",
                                            color: isActive ? "red" : "yellow"
                                        };
                                    }} >Register</NavLink>
                                </li>
                            }

                            {
                                user?.email ?
                                    <button className="btn btn-success" onClick={logOut} > <span className="fw-bold text-info">Log Out</span> {user.displayName}</button>
                                    :
                                    <li className="nav-item navLinks">
                                        <NavLink className="me-3 text-decoration-none" to="/login" style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                // margin: "1rem 0",
                                                color: isActive ? "red" : "yellow"
                                            };
                                        }} >Login</NavLink>
                                    </li>
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;