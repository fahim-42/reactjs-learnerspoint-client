import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Courses.css';

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3030/courses';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data.courses));
    }, []);
    return (
        <div className="bg-dark">
            <div className="text-center fst-italic bg-dark text-warning m-0 py-4">
                <h2>Courses: Quick Overview</h2>
            </div>
            <div className="package-container mx-5">
                {
                    course?.slice(0, 3).map((pkg) => (
                        <div key={pkg._id} className="package bg-light mx-3 mb-3 border border-1 rounded-3 shadow-lg">
                            <img style={{ height: "200px", width: "100%" }} className="p-3" src={pkg.image} alt="" />
                            <h3 className="text-center fw-bold fst-italic">{pkg.course}</h3>
                            <h6 className="text-center my-3">Difficulty: {pkg.level}</h6>
                            <h5 className="mb-3 text-center fst-italic">Fee: {pkg.fee}tk</h5>
                            <div className="d-flex">
                                <p className="fw-normal fw-bolder ps-4">Time: {pkg.duration} hrs</p>
                                <p className="ms-auto fw-normal fw-bolder pe-4">Seat available: {pkg.seat}</p>
                            </div>
                            <div className='text-center'>
                                <Link to={`/booking/${pkg._id}`}>
                                    <Button variant="warning" className="fw-bold mb-3 px-3 py-2">Book Now</Button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;