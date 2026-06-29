import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './About.module.css';

const stats = [
  { number: '9+', label: 'Years in Business' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '40+', label: 'Signature Dishes' },
];

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.imageColumn}
        >
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.expNumber}>9</span>
            <span className={styles.expText}>Years of<br />Excellence</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.contentColumn}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.line} />
            <span>Our Story</span>
          </div>

          <h2 className={styles.title}>
            A Legacy of <span>Culinary Excellence</span>
          </h2>

          <p className={styles.text}>
            Experience the rich culinary heritage of Kerala, where every dish is crafted with authentic spices, traditional recipes, and generations of passion. From flavorful vegetarian specialties to delicious non-vegetarian delicacies, we bring the true taste of God's Own Country to your table.
          </p>

          <p className={styles.text}>
            Authentic Kerala cuisine made with fresh ingredients, traditional recipes, and aromatic spices. From wholesome vegetarian meals to flavorful seafood and meat specialties, every dish is prepared with care, passion, and true Kerala hospitality.
          </p>

          <div className={styles.chefInfo}>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80"
              alt="Executive Chef"
              className={styles.chefImage}
            />
            <div className={styles.chefDetails}>
              <h4>Marcus Sterling</h4>
              <p>Executive Chef & Founder</p>
            </div>
          </div>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={styles.statCard}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;