import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const ManageCourses = () => {
    const [manageCourse, setManageCourse] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3030/courses';
        fetch(url)
            .then(res => res.json())
            .then(data => setManageCourse(data.courses))
    }, []);

    const handleDelete = id => {
        const deleteConfirm = window.confirm('Want to delete ?');
        if (deleteConfirm) {
            const url = `http://localhost:3030/courses/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order deleted successfully.');

                        const remainingOrders = manageCourse.filter(order => order._id !== id);
                        setManageCourse(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="col-lg-12 col-sm-12">
            <h2 className="text-white text-center fw-bold fst-italic my-3">Manage All Courses</h2>
            <div className="col-lg-11 col-11 mx-auto bg-light border rounded-3 shadow-lg mt-4 mb-5 overflow-auto">
                <Table className="px-5 m-0" bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Id</th>
                            <th>Course</th>
                            <th>Fee(Tk)</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageCourse.map((course) => (<tr key={course._id} className="text-center">
                                <td>{course._id}</td>
                                <td>{course.course}</td>
                                <td>{course.fee}</td>
                                <button onClick={() => handleDelete(course._id)} className="bg-danger text-white btn btn-danger py-1 my-1">Delete</button>
                            </tr>))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageCourses;