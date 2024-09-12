import React from 'react';
import styles from './InternshipCard.module.css';

const InternshipCard = ({ internship }: { internship: any }) => {
  return (
    <div className={styles.card}>
      <img src={internship.image} alt={internship.title} className={styles.image} />
      <h2 className={styles.title}>{internship.title}</h2>
      <p className={styles.description}>{internship.description}</p>
      <button className={styles.button}>Register</button>
    </div>
  );
};

export default InternshipCard;
