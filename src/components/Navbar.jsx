import { Link } from 'react-router-dom';

import styles from '../styles/Navbar.module.css';
import naturlogo from '../assets/naturlogo.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <img src={naturlogo} alt="Logo" className={styles.logo} />
      </Link>
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
