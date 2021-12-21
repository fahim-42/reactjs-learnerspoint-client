import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const AddCourse = () => {
    const courseRef = useRef();
    const imageRef = useRef();
    const feeRef = useRef();
    const levelRef = useRef();
    const durationRef = useRef();
    const seatRef = useRef();

    const handleAddCourse = e => {
        const course = courseRef.current.value;
        const image = imageRef.current.value;
        const fee = feeRef.current.value;
        const level = levelRef.current.value;
        const duration = durationRef.current.value;
        const seat = seatRef.current.value;

        const newCourse = { course, image, fee, level, duration, seat }

        const url = 'http://localhost:3030/courses';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Course Added Successfully.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="col-10 col-lg-6 mx-auto my-5 border bg-light border rounded-3 shadow-lg">
            <div className="text-center text-danger fst-italic py-2">
                <h2>Input Course Details</h2>
            </div>
            <Form onSubmit={handleAddCourse} className="mx-2 px-2 mb-4">
                <Form.Group className="mb-3" controlId="formBasicCourseName">
                    <Form.Label>Course Title:</Form.Label>
                    <Form.Control
                        type="text"
                        ref={courseRef}
                        placeholder="Title"
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Thumbnail :</Form.Label>
                    <Form.Control
                        type="text"
                        ref={imageRef}
                        placeholder="Sample Image url" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicCourseFee">
                        <Form.Label>Course Fee:</Form.Label>
                        <Form.Control
                            type="number"
                            ref={feeRef}
                            placeholder="Ex: 2500 in tk"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formBasicCourseLevel">
                        <Form.Label>Course Level:</Form.Label>
                        <Form.Control
                            type="text"
                            ref={levelRef}
                            placeholder="Novice/Intermediate/Superior"
                            required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicCourseDuration">
                        <Form.Label>Course Duration:</Form.Label>
                        <Form.Control
                            type="text"
                            ref={durationRef}
                            placeholder="Format - hh.mm"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formBasicCourseSeat">
                        <Form.Label>Course Seat:</Form.Label>
                        <Form.Control
                            type="number"
                            ref={seatRef}
                            placeholder="Available seats" />
                    </Form.Group>
                </Row>
                <Button variant="warning" type="submit">Add Course</Button>
            </Form>
        </div>
    );
};

export default AddCourse;