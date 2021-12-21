import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className="mx-auto bg-dark">
            <div className="text-center fst-italic bg-dark text-warning m-0 py-4">
                <h2>About Us</h2>
            </div>

            <div className="col-lg-10 d-flex flex-wrap align-items-center pb-4 mx-auto text-white">
                <div className="col-lg-8 col-sm-12">
                    <h1 className="text-center my-3 fw-bolder fst-italic">Learners Point&trade;</h1>
                    <p className="fs-5 mx-5 my-3">This is the best in town institute for learning English efficiently. Our expert trainer helps you learn English easily. We provide extra care for weak learners and provide financial support for poor but brilliant student.
                    <br></br>
                    We offer "Batch-Topper" an opportunity to work with us.</p>
                    <div className="fs-5 mx-5 my-3">
                        <h3 className="fw-bold fst-italic">We Ensure :</h3>
                        <ul className="ms-5 fst-italic ">
                            <li>Certified Lecturer</li>
                            <li>State-of-art classroom</li>
                            <li>Daily assessment</li>
                            <li>Weekly assessment</li>
                            <li>Feedback about lecturer</li>
                            <li>Improvement by feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 border-5 rounded-3 mx-auto shadow-lg bg-white">
                    <Form className="mx-3 px-3 mt-3">
                        <Form.Text className="mb-1 text-dark fs-5 fw-bolder fst-italic">
                            Keep up-to-date with our newsletter !?
                            <br></br>
                            Register Now !
                        </Form.Text>
                        <Form.Group className="mt-3 mb-3 text-dark" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address :</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Interested topic :</Form.Label>
                            <Form.Control placeholder="Any specific interest !!" as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="mb-3" variant="warning" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default About;