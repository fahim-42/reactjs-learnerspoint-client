import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CourseMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../Redux/slices/courseSlice';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseMenu = () => {

    //animation
    useEffect(() => {
        AOS.init(
            /* {
            offset: 100,
            duration: 2000,
            easing: 'ease'
        } */
        );
    })

    // Redux
    /* const allCourses = useSelector((state) => state.courses.discover);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourses());
    }, []) */

    // without redux
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3030/courses';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data.courses));
    }, []);

    return (
        <div className="bg-secondary">
            <div className="text-center text-warning fst-italic m-0 py-2">
                <h1>"Explore Courses"</h1>
            </div>
            <div className="coursemenu-container mx-5 pb-4">
                {
                    course?.map((pkg) => (
                        <div key={pkg._id} className="coursemenu bg-dark text-white-50 mx-4 my-3 border border-secondary rounded-3 shadow-sm" data-aos="zoom-in-up" data-aos-duration="3000">
                            <img style={{ height: "200px", width: "100%" }} className="p-3" src={pkg.image} alt="" />
                            <h3 className="text-center fw-bold fst-italic">{pkg.course}</h3>
                            <h6 className="text-center my-3">Difficulty: {pkg.level}</h6>
                            <h5 className="mb-3 text-center fst-italic">Price: {pkg.fee}tk</h5>
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

export default CourseMenu;