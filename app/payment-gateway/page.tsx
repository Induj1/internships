"use client";

import React from 'react';
import PaymentButton from '../../components/PaymentButton';
import styles from './PaymentGateway.module.css'; // Ensure the path is correct

const PaymentGateway: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Secure Payment</h1>
      <p className={styles.description}>Complete your payment to secure your internship position.</p>
      <PaymentButton amount={1000} /> {/* Pass the amount for payment */}
    </div>
  );
};

export default PaymentGateway;
