import { Link } from 'react-router-dom';

import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png'; // Adjust the path based on where your image is

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navItems}>
        <li>Exhibition</li>
        <li>Knowledge & Research</li>
        <li>School & Institutions</li>
        <li>The Mols Laboratory</li>
        <li>
                    <Link to="/journal">Digital Journal</Link>
        </li>
        <li>About Us</li>
        <li>Webshop</li>
      </ul>
    </nav>
  );
}

export default Navbar;
