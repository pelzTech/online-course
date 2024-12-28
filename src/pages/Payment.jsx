import React from 'react';
import './Payment.css';

const Payment = ({ course, paymentMethod }) => {
  return (
    <div className="payment-component">
      <h3>Payment for {course.name}</h3>
      <p>Payment Method: {paymentMethod}</p>
      <p>Amount: ${course.discountedPrice}</p>
      <button>Complete Payment</button>
    </div>
  );
};

export default Payment;
