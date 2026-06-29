import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import styles from './SignatureDishes.module.css';

const dishes = [
  {
    title: "Chef's Special",
    name: 'Royal Seafood Tower',
    description: 'An extravagant tower of Maine lobster, Alaskan king crab, oysters, and jumbo shrimp, served with champagne mignonette and drawn butter',
    price: '$120',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553163147-62195751c3a2?auto=format&fit=crop&w=800&q=80',
    badge: 'Exclusive'
  },
  {
    title: 'Most Popular',
    name: 'Southern Surf & Turf',
    description: 'Prime filet mignon paired with butter-poached lobster tail, truffle mashed potatoes, and asparagus with hollandaise',
    price: '$95',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller'
  },
  {
    title: 'Seasonal Favorite',
    name: 'Autumn Harvest Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, butternut squash, sage brown butter, and aged parmesan crisp',
    price: '$58',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    badge: 'Limited'
  }
];

const SignatureDishes = () => {
  const [ref, isVisible] = useScrollAnimation(0.15);

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
            <span>Signature Selection</span>
          </div>
          <h2 className={styles.title}>Chef's <span>Recommendations</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={dish.image} alt={dish.name} />
                <div className={styles.overlay} />
                <span className={styles.badge}>{dish.badge}</span>
                <div className={styles.priceTag}>{dish.price}</div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{dish.title}</span>
                <h3 className={styles.name}>{dish.name}</h3>
                <p className={styles.description}>{dish.description}</p>

                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(dish.rating) ? styles.starFilled : styles.starEmpty}
                    />
                  ))}
                  <span>{dish.rating}</span>
                </div>

                <button className={styles.orderBtn}>
                  <span>Order Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;