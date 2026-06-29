import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import styles from './OpeningHours.module.css';

const hours = [
  { days: 'Monday – Friday', time: '11:00 AM – 11:00 PM', icon: FaClock },
  { days: 'Saturday', time: '11:00 AM – 11:00 PM', icon: FaCalendarAlt },
  { days: 'Sunday', time: '11:00 AM – 11:00 PM', icon: FaCalendarAlt },
];

const OpeningHours = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Visit Us</span>
          </div>
          <h2 className={styles.title}>Opening <span>Hours</span></h2>
          <p className={styles.subtitle}>Join us for an unforgettable dining experience</p>
        </motion.div>

        <div className={styles.cards}>
          {hours.map((item, index) => (
            <motion.div
              key={item.days}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <item.icon className={styles.icon} />
              </div>
              <h3 className={styles.days}>{item.days}</h3>
              <div className={styles.timeWrapper}>
                <div className={styles.timeLine} />
                <p className={styles.time}>{item.time}</p>
                <div className={styles.timeLine} />
              </div>
              <div className={styles.status}>
                <span className={styles.dot} />
                <span>Open</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;