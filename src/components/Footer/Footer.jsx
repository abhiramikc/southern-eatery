import { FaInstagram, FaFacebook, FaTwitter, FaArrowUp } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={logo} alt="Southern Eatery" />
              <div className={styles.logoText}>
                <h3>Southern Eatery</h3>
                <p>Fine Dining Experience</p>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Where tropical elegance meets culinary mastery. An unforgettable 
              journey of flavors crafted with passion and precision.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reservation">Reservations</a></li>
            </ul>
          </div>

          <div className={styles.hours}>
            <h4>Opening Hours</h4>
            <ul>
              <li><span>Mon – Sun:</span> 11:00 AM – 11:00 PM</li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>Subscribe for exclusive offers and events</p>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2024 Southern Eatery. All rights reserved.
          </p>

          <div className={styles.socialLinks}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>

          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;