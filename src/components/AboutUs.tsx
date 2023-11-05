import React from 'react';
import styles from '../scss/components/aboutUs.module.scss';
import Button from './Button';

const AboutUs: React.FC = (props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.aboutUs}>About Us</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Business Name</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
            sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper
            malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor
            euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
            molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In
            sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue
            cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin
            dictum gravida. Porttitor maecenas
          </p>
          <div className={styles.contactForm}>
            <h5 className={styles.contactInfo}>Contact Information</h5>
            <span className={styles.number}>+91 1256378409</span>
            <span className={styles.email}>Someting@random.com</span>
            <Button className={styles.button}>Directions</Button>
          </div>
        </div>
        <img className={styles.image} src="https://i.ibb.co/sKgP7RR/Rectangle-19-1.png" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
