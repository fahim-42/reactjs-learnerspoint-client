import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div className="d-flex">
            <div className="col-4 col-lg-2">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
                    <Navbar.Brand as={Link} className="d-flex align-items-center m-0 p-0 link-dark text-decoration-none fs-3" to="/dashboard">Dashboard</Navbar.Brand>
                    <hr></hr>
                    <ul className="nav nav-pills flex-column mb-auto">

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/admin`}>Make Admin</Nav.Link>}

                        <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/my_bookings`}>My Bookings</Nav.Link>

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/manage_bookings`}>Manage Bookings</Nav.Link>}

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/add_course`}>Add Course</Nav.Link>}

                        <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/review`}>Review Course</Nav.Link>

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/manage_courses`}>Manage Courses</Nav.Link>}
                    </ul>
                </div>
            </div>
            <div className="col-8 col-lg-10 bg-secondary">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;