import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import OpeningHours from './components/OpeningHours/OpeningHours';
import FeaturedMenu from './components/FeaturedMenu/FeaturedMenu';
import SignatureDishes from './components/SignatureDishes/SignatureDishes';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import ReservationCTA from './components/ReservationCTA/ReservationCTA';
import Catering from './components/Catering/Catering';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={styles.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className={styles.loaderContent}>
              <div className={styles.logoRing}>
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Southern Eatery" />
              </div>
              <div className={styles.spinner}>
                <div className={styles.ring} />
                <div className={styles.ring} />
                <div className={styles.ring} />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Preparing your experience...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className={styles.app}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <OpeningHours />
          <FeaturedMenu />
          <SignatureDishes />
          <Gallery />
          <Testimonials />
          <ReservationCTA />
          <Catering />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;