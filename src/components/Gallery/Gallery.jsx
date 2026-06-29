import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaExpand } from 'react-icons/fa';
import styles from './Gallery.module.css';

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}unnamed.jpg`, category: 'Interior', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}unnamed-2.jpg`, category: 'Dining', span: 'normal' },
  { src: `${import.meta.env.BASE_URL}unnamed-3.jpg`, category: 'Interior', span: 'normal' },
  { src: `${import.meta.env.BASE_URL}unnamed-4.jpg`, category: 'Food', span: 'wide' },
  { src: `${import.meta.env.BASE_URL}unnamed-5.jpg`, category: 'Chef', span: 'normal' },
  { src: `${import.meta.env.BASE_URL}unnamed-6.jpg`, category: 'Dining', span: 'tall' },
  { src: `${import.meta.env.BASE_URL}unnamed-7.jpg`, category: 'Food', span: 'normal' },
  { src: `${import.meta.env.BASE_URL}unnamed-8.jpg`, category: 'Food', span: 'normal' },
  { src: `${import.meta.env.BASE_URL}unnamed-9.jpg`, category: 'Interior', span: 'wide' },
];

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Visual Journey</span>
          </div>
          <h2 className={styles.title}>Our <span>Gallery</span></h2>
          <p className={styles.subtitle}>A glimpse into the Southern Eatery experience</p>
        </motion.div>

        <div className={styles.masonry}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.item} ${styles[image.span]}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={image.src} alt={image.category} />
              <div className={`${styles.overlay} ${hoveredIndex === index ? styles.active : ''}`}>
                <div className={styles.overlayContent}>
                  <span className={styles.category}>{image.category}</span>
                  <FaExpand className={styles.icon} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;