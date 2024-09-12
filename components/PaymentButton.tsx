import React from 'react';

const PaymentButton = ({ onPaymentSuccess }) => {
  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 1000 * 100, // amount in the smallest currency unit
      currency: 'INR',
      name: 'Internship Portal',
      description: 'Secure your internship',
      handler: function (response) {
        alert("Payment Successful!");
        onPaymentSuccess(); // Callback function to show the register button
      },
      prefill: {
        name: 'Your Name',
        email: 'email@example.com',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} style={{ padding: '10px', backgroundColor: '#4caf50', color: 'white', borderRadius: '5px' }}>
      Proceed to Payment
    </button>
  );
};

export default PaymentButton;
