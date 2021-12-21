import React, { useRef, useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router';
import useAuth from './../../hooks/useAuth';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Booking = () => {

    //animation
    useEffect(() => {
        AOS.init();
    })

    const { id } = useParams();
    const { user } = useAuth();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        // const url = `http://localhost:3030/courses?pkg=${id}`;
        const url = `https://hidden-hamlet-39500.herokuapp.com/courses?pkg=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.queryCourseInfo));
    }, [id]);

    const nameRef = useRef();
    const emailRef = useRef();
    const courseRef = useRef();
    const feeRef = useRef();
    const addressRef = useRef();
    const mobileRef = useRef();

    const handleBooking = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const course = courseRef.current.value;
        const fee = feeRef.current.value;
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;
        const status = "Pending";

        const bookingInfo = { name, email, course, fee, address, mobile, status };

        // const url = 'http://localhost:3030/bookings';
        const url = 'https://hidden-hamlet-39500.herokuapp.com/bookings';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking order submitted.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="col-lg-6 my-2 mx-auto border-0 rounded-3">
            <div className="text-center text-danger fst-italic m-0 py-3">
                <h1>Booking Information</h1>
            </div>

            <Form onSubmit={handleBooking} className="row g-3 mt-3 mx-5 mb-5 px-3 py-4 border border-2 shadow-lg" data-aos="zoom-out" data-aos-duration="3000">
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicName">
                        <Form.Label>Username :</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            ref={nameRef}
                            value={user.displayName}
                            placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formBasicEmail">
                        <Form.Label>Email address :</Form.Label>
                        <Form.Control
                            disabled
                            type="email"
                            ref={emailRef}
                            value={user.email}
                            placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicCourse">
                        <Form.Label>Selected Course:</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            ref={courseRef}
                            value={details[0]?.course}
                            placeholder="Course name" />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formBasicfee">
                        <Form.Label>Selected Course Fee:</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            ref={feeRef}
                            value={details[0]?.fee}
                            placeholder="Course fee in Taka" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicAddress">
                        <Form.Label>Current Address :</Form.Label>
                        <Form.Control
                            type="text"
                            ref={addressRef}
                            placeholder="Local area, street name etc."
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formBasicMobile">
                        <Form.Label>Mobile number :</Form.Label>
                        <Form.Control
                            type="number"
                            ref={mobileRef}
                            placeholder="Your mobile number"
                            required />
                    </Form.Group>
                </Row>
                <Button variant="warning" type="submit">Book Now</Button>
            </Form>
        </div>
    )
};

export default Booking;