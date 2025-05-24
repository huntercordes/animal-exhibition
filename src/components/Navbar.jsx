import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import naturlogo from '../assets/naturlogo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" onClick={handleLinkClick}>
        <img src={naturlogo} alt="Logo" className={styles.logo} />
      </Link>

      <button 
        className={styles.burger} 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <ul className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
        <li><Link to="/journal" onClick={handleLinkClick}>Exhibition</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>Knowledge & Research</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>School & Institutions</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>The Mols Laboratory</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>Digital Journal</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>About Us</Link></li>
        <li><Link to="/journal" onClick={handleLinkClick}>Webshop</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
