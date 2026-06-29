import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury restaurant interior" 
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.badge}
        >
          <span className={styles.badgeLine} />
          <span>Est. 2015</span>
          <span className={styles.badgeLine} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          Southern <span>Eatery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.tagline}
        >
          Where Tropical Elegance Meets Culinary Mastery
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.description}
        >
          Experience an unforgettable journey of flavors crafted with passion, 
          featuring the finest locally-sourced ingredients and innovative techniques 
          in an atmosphere of understated luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={styles.ctaGroup}
        >
          <a href="#menu" className={styles.primaryBtn} onClick={(e) => {
            e.preventDefault();
            document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
          }}>
            View Menu
          </a>
          <a href="#reservation" className={styles.secondaryBtn} onClick={(e) => {
            e.preventDefault();
            document.querySelector('#reservation').scrollIntoView({ behavior: 'smooth' });
          }}>
            Book a Table
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;