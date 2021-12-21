import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import useAuth from '../../../hooks/useAuth';

const ManageBookings = () => {
    const { user } = useAuth();
    const [status, setStatus] = useState([]);
    const [manageBooking, setManageBooking] = useState([]);

    const handleUpdate = id => {
        const bookingStatus = 'Booked';
        setStatus(bookingStatus);

        const isBooked = { status };

        // const url = `http://localhost:3030/bookings/${id}`;
        const url = `https://hidden-hamlet-39500.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isBooked)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Status updated');
                    /* const remainingBookings = manageBooking.filter(booking => booking.status !== 'Pending');
                    setManageBooking(remainingBookings); */
                }
            })
    }

    useEffect(() => {
        // const url = 'http://localhost:3030/bookings';
        const url = 'https://hidden-hamlet-39500.herokuapp.com/bookings';
        fetch(url)
            .then(res => res.json())
            .then(data => setManageBooking(data.bookings))
    }, [user]);

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
                        alert('Booking deleted successfully.');

                        const remainingBookings = manageBooking.filter(booking => booking._id !== id);
                        setManageBooking(remainingBookings);
                    }
                })
        }
    }
    return (
        <div className="col-lg-12 col-sm-12">
            <h2 className="text-white text-center fw-bold fst-italic my-3">Manage All Bookings</h2>
            <div className="col-lg-11 col-11 mx-auto bg-light border rounded-3 shadow-lg mt-4 mb-5 overflow-auto">
                <Table className="px-5 m-0" bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Email</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Fee(Tk)</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageBooking.map((booking) => (<tr key={booking._id} className="text-center">
                                <td>{booking.email}</td>
                                <td>{booking.name}</td>
                                <td>{booking.course}</td>
                                <td>{booking.fee}</td>
                                <td>{booking.address}</td>
                                <td>{booking.status}</td>

                                <button onClick={() => handleUpdate(booking._id)} className="bg-success text-white btn btn-danger py-1 my-1">Update</button>

                                <button onClick={() => handleDelete(booking._id)} className="bg-danger text-white btn btn-danger ms-2 py-1 my-1">Delete</button>
                            </tr>))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageBookings;