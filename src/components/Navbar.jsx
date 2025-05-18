import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png'; // Adjust the path based on where your image is

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
