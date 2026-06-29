import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaExpand } from 'react-icons/fa';
import styles from './Gallery.module.css';

import unnamed from '../../assets/unnamed.jpg';
import unnamed2 from '../../assets/unnamed-2.jpg';
import unnamed3 from '../../assets/unnamed-3.jpg';
import unnamed4 from '../../assets/unnamed-4.jpg';
import unnamed5 from '../../assets/unnamed-5.jpg';
import unnamed6 from '../../assets/unnamed-6.jpg';
import unnamed7 from '../../assets/unnamed-7.jpg';
import unnamed8 from '../../assets/unnamed-8.jpg';
import unnamed9 from '../../assets/unnamed-9.jpg';

const galleryImages = [
  { src: unnamed, category: 'Interior', span: 'tall' },
  { src: unnamed2, category: 'Dining', span: 'normal' },
  { src: unnamed3, category: 'Interior', span: 'normal' },
  { src: unnamed4, category: 'Food', span: 'wide' },
  { src: unnamed5, category: 'Chef', span: 'normal' },
  { src: unnamed6, category: 'Dining', span: 'tall' },
  { src: unnamed7, category: 'Food', span: 'normal' },
  { src: unnamed8, category: 'Food', span: 'normal' },
  { src: unnamed9, category: 'Interior', span: 'wide' },
];
console.log('BASE_URL:', import.meta.env.BASE_URL);
console.log('Image src:', unnamed2);

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