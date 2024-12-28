import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Payment from './Payment'; 
import './Checkout.css'
import paypalIcon from '../assets/paypal.jpg';
import bitcoinIcon from '../assets/bitcoin.jpg';
import bankCardIcon from '../assets/bank.jpg';
import bankTransferIcon from '../assets/transfer.jpg';

const Checkout = () => {
  const location = useLocation();
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const course = location.state?.course;

  if (!course) {
    return <p>No course selected. Please go back and select a course.</p>;
  }

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method); 
  };

  const handleProceedToPayment = () => {
    if (selectedPaymentMethod) {
      setShowPayment(true); 
    } else {
      alert('Please select a payment method first.');
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="course-summary">
        <h3>{course.name}</h3>
        <p>Duration: {course.duration}</p>
        <p>
          Price: <span className="original-price">${course.price}</span>{' '}
          <span className="discounted-price">${course.discountedPrice}</span>
        </p>

        <button
          className="select-payment-method-button"
          onClick={() => setShowPaymentMethods(true)}
        >
          Select Payment Method
        </button>
        {showPaymentMethods && (
          <div className="payment-methods">
            <h4>Select Payment Method</h4>
            <div
              className={`payment-method ${selectedPaymentMethod === 'PayPal' ? 'selected' : ''}`}
              onClick={() => handleSelectPaymentMethod('PayPal')}
            >
              <img src={paypalIcon} alt="PayPal" />
              <span>PayPal</span>
            </div>
            <div
              className={`payment-method ${selectedPaymentMethod === 'Bitcoin' ? 'selected' : ''}`}
              onClick={() => handleSelectPaymentMethod('Bitcoin')}
            >
              <img src={bitcoinIcon} alt="Bitcoin" />
              <span>Bitcoin</span>
            </div>
            <div
              className={`payment-method ${selectedPaymentMethod === 'BankCard' ? 'selected' : ''}`}
              onClick={() => handleSelectPaymentMethod('BankCard')}
            >
              <img src={bankCardIcon} alt="Bank Card" />
              <span>Bank Card</span>
            </div>
            <div
              className={`payment-method ${selectedPaymentMethod === 'BankTransfer' ? 'selected' : ''}`}
              onClick={() => handleSelectPaymentMethod('BankTransfer')}
            >
              <img src={bankTransferIcon} alt="Bank Transfer" />
              <span>Bank Transfer</span>
            </div>
          </div>
        )}
        {selectedPaymentMethod && (
          <button
            className="proceed-to-payment-button"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button>
        )}
      </div>
      {showPayment && <Payment course={course} paymentMethod={selectedPaymentMethod} />}
    </div>
  );
};

export default Checkout;
