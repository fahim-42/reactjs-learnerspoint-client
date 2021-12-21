import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Courses.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Courses = () => {

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

    const [course, setCourse] = useState([]);
    useEffect(() => {
        // const url = 'http://localhost:3030/courses';
        const url = 'https://hidden-hamlet-39500.herokuapp.com/courses';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data.courses));
    }, []);
    return (
        <div className="bg-dark">
            <div className="text-center fst-italic bg-dark text-warning m-0 py-4">
                <h2>Courses: Quick View</h2>
            </div>
            <div className="package-container mx-5">
                {
                    course?.slice(0,8).map((pkg) => (
                        <div key={pkg._id} className="package bg-light mx-3 mb-3 border border-1 rounded-3 shadow-lg" data-aos="fade-up" data-aos-duration="3000">
                            <Link to="/courses" className=" text-decoration-none text-dark">
                                <img style={{ height: "200px", width: "100%" }} className="p-3" src={pkg.image} alt="" />
                                <h5 className="text-center fw-bold mb-3">{pkg.course}</h5>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;