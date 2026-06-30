import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from './ReservationCTA.module.css';

const ReservationCTA = () => {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section id="reservation" className={styles.section}>
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant ambiance"
        />
        <div className={styles.overlay} />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <div className={styles.glassCard}>
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Reservations</span>
            <span className={styles.line} />
          </div>
          <h2 className={styles.title}>Coming Soon..</h2>
          {/* <h2 className={styles.title}>Reserve Your <span>Table Today</span></h2> */}

          {/* <p className={styles.description}>
            Whether it's an intimate dinner for two or a celebration with friends, 
            let us create an unforgettable experience for you. Our team is ready to 
            make your evening truly special.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureDot} />
              <span>Private Dining Rooms</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureDot} />
              <span>Custom Menus</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureDot} />
              <span>Sommelier Pairing</span>
            </div>
          </div>

          <a href="#contact" className={styles.ctaButton} onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            <FaCalendarAlt />
            <span>Book Now</span>
          </a> */}
        </div>
      </motion.div>
    </section >
  );
};

export default ReservationCTA;