import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import useAuth from '../../../hooks/useAuth';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const MyBookings = () => {
    const { user } = useAuth();
    const email = user.email;

    const [myBooking, setMyBooking] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:3030/bookings?email=${email}`;
        const url = `https://hidden-hamlet-39500.herokuapp.com/bookings?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBooking(data.myBookingInfo))
    }, [email]);

    const handleDelete = id => {
        const deleteConfirm = window.confirm('Want to delete ?');
        if (deleteConfirm) {

            // const url = `http://localhost:3030/bookings/${id}`;
            const url = `https://hidden-hamlet-39500.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order deleted successfully.');

                        const remainingBookings = myBooking.filter(order => order._id !== id);
                        setMyBooking(remainingBookings);
                    }
                })
        }
    }
    return (
        <div className="col-lg-12 col-sm-12">
            <h2 className="text-white text-center fw-bold fst-italic my-3">My Bookings</h2>
            <div className="col-lg-11 col-11 mx-auto bg-light border rounded-3 shadow-lg mt-4 mb-5 overflow-auto">
                <Table className="px-5 m-0" bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Email</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Fee(Tk)</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBooking.map((booking) => (<tr key={booking._id} className="text-center">
                                <td>{booking.email}</td>
                                <td>{booking.name}</td>
                                <td>{booking.course}</td>
                                <td>{booking.fee}</td>
                                <td>
                                    <Button onClick={() => handleDelete(booking._id)} className="btn btn-danger py-0 my-0">Delete</Button>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyBookings;