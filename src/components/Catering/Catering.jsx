import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaBirthdayCake, FaHeart, FaBriefcase, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import styles from './Catering.module.css';

const cateringServices = [
  {
    icon: FaBirthdayCake,
    title: 'Birthdays & Private Parties',
    description: 'Celebrate your special milestones with custom menus, live food counters, and mouth-watering appetizers that your guests will love.'
  },
  {
    icon: FaHeart,
    title: 'Weddings & Receptions',
    description: 'From grand traditional Kerala Sadhya served on banana leaves to contemporary fusion buffets, we bring elegance and flavor to your big day.'
  },
  {
    icon: FaBriefcase,
    title: 'Corporate & Small Functions',
    description: 'Seamless corporate lunches, executive gatherings, or small family functions. We provide custom food boxes and professional setup options.'
  }
];

const Catering = () => {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday',
    guests: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="catering" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Catering Services</span>
            <span className={styles.line} />
          </div>
          <h2 className={styles.title}>Celebrate With <span>Southern Eatery</span></h2>
          <p className={styles.subtitle}>Bringing the authentic flavors of Kerala to your special occasions</p>
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.servicesList}>
            {cateringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={styles.serviceCard}
              >
                <div className={styles.iconWrapper}>
                  <service.icon className={styles.icon} />
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.formContainer}
          >
            <div className={styles.glassCard}>
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="catering-form"
                    onSubmit={handleSubmit}
                    className={styles.form}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3>Request Catering Quote</h3>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(519) 555-0199"
                      />
                    </div>

                    <div className={styles.row}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="eventType">Event Type</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                        >
                          <option value="Birthday">Birthday Party</option>
                          <option value="Wedding">Wedding / Reception</option>
                          <option value="Corporate">Corporate Event</option>
                          <option value="Small Function">Small Function</option>
                          <option value="Other">Other Occasion</option>
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="guests">Estimated Guests</label>
                        <input
                          type="number"
                          id="guests"
                          name="guests"
                          required
                          min="10"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="e.g. 50"
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="notes">Tell Us About Your Event</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any dietary preferences, menu choices, or special requests..."
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <FaPaperPlane />
                      <span>Submit Inquiry</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <FaCheckCircle className={styles.successIcon} />
                    <h3>Inquiry Submitted!</h3>
                    <p>Thank you for reaching out, <strong>{formData.name}</strong>. Our catering specialist will contact you at <strong>{formData.phone}</strong> within 24 hours to discuss details and provide a custom quote.</p>
                    <button onClick={() => setFormSubmitted(false)} className={styles.resetBtn}>
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
