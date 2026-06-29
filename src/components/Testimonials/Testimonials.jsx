import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Critic, NY Times',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'An extraordinary dining experience that transcends the ordinary. The Royal Seafood Tower was nothing short of magnificent, and the service was impeccable. Southern Eatery has set a new standard for fine dining in the region.'
  },
  {
    name: 'James Crawford',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'From the moment we walked in, we knew this would be special. The ambiance, the presentation, the flavors—everything was orchestrated to perfection. The Wagyu Ribeye melted in my mouth. Simply unforgettable.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Travel & Lifestyle Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'I have dined at Michelin-starred restaurants across Europe, and Southern Eatery stands proudly among them. Chef Marcus Sterling is a true artist. The seasonal menu is always a delightful surprise.'
  },
  {
    name: 'Michael Chang',
    role: 'Restaurant Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 4.5,
    text: 'The attention to detail is remarkable. From the handcrafted cocktails to the exquisite plating, every element speaks of quality and passion. This is what fine dining should be—an experience that engages all senses.'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Testimonials</span>
          </div>
          <h2 className={styles.title}>What Our <span>Guests Say</span></h2>
        </motion.div>

        <div className={styles.carousel}>
          <button className={styles.navButton} onClick={prev} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>

          <div className={styles.contentWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.testimonial}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.text}>{testimonials[current].text}</p>

                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(testimonials[current].rating) ? styles.starFilled : styles.starEmpty} 
                    />
                  ))}
                </div>

                <div className={styles.author}>
                  <img src={testimonials[current].image} alt={testimonials[current].name} />
                  <div className={styles.authorInfo}>
                    <h4>{testimonials[current].name}</h4>
                    <p>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navButton} onClick={next} aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;