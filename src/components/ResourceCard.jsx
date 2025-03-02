import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ResourceCard.module.css';

export default function ResourceCard({ title, description, link, icon }) {
  return (
    <Link to={link} className={styles.cardLink}>
      <div className={styles.card}>
        {icon && <div className={styles.cardIcon}>{icon}</div>}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}