import React, { useEffect, useState } from 'react';
import './Reviews.css';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {

    //animation
    useEffect(() => {
        AOS.init();
    })

    const [review, setReview] = useState([]);
    useEffect(() => {
        // const url = 'http://localhost:3030/reviews';
        const url = 'https://hidden-hamlet-39500.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);
    return (
        <div className="bg-dark">
            <div className="text-center fst-italic bg-dark text-warning py-4">
                <h2>Client's Feedback</h2>
            </div>

            <div className="review-container mx-5">
                {
                    review?.map((rvw) => (
                        <div key={rvw._id} className="review bg-light mx-3 mb-3 border border-warning rounded-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
                            <h5 className="text-center fw-bold fst-italic mt-3">{rvw.email}</h5>
                            <p className="px-4 mb-3">{rvw.review}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;