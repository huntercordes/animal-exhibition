import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from '../assets/logo.png'; // Replace with actual logo path
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <img src={logo} alt="Museum Logo" className={styles.logo} />

        <div className={styles.column}>
          <h4>Explore Nature</h4>
          <ul>
            <li>Visit Us</li>
            <li>Exhibitions</li>
            <li>Education</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Hours</h4>
          <ul>
            <li>Monday : <strong>Closed</strong></li>
            <li>Tuesday : <strong>9–16</strong></li>
            <li>Wednesday : <strong>9–21</strong></li>
            <li>Thursday – Sunday : <strong>9–16</strong></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Subscribe</h4>
          <p>Join our newsletter to stay updated on features and museum releases.</p>
          <input type="email" placeholder="Your Email Here" className={styles.input} />
          <button className={styles.subscribeBtn}>Subscribe</button>
          <p className={styles.consentText}>
            By subscribing, you agree to our Privacy Policy and consent to updates.
          </p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© 2025 Naturhistorisk Museum. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
