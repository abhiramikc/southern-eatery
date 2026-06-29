import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    content: '1790 Dundas St #15, London, ON N5W 3E5',
    link: 'https://maps.google.com/?q=1790+Dundas+St+%2315,+London,+ON+N5W+3E5'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    content: '(519) 451-9000',
    link: 'tel:+15194519000'
  },
  {
    icon: FaClock,
    title: 'Hours',
    content: 'Monday - Sunday: 11:00 AM - 11:00 PM',
    link: null
  }
];

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' }
];

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Get in Touch</span>
          </div>
          <h2 className={styles.title}>Contact <span>Us</span></h2>
          <p className={styles.subtitle}>We would love to hear from you</p>
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link || '#'}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={styles.infoCard}
                {...(item.link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className={styles.iconWrapper}>
                  <item.icon className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </motion.a>
            ))}

            <div className={styles.socialSection}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.mapColumn}
          >
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapOverlay}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                <p>Visit Our Restaurant</p>
                <span>1790 Dundas St #15, London, ON N5W 3E5</span>
              </div>
              <div className={styles.mapPlaceholder}>
                <iframe
                  title="Southern Eatery Location"
                  src="https://maps.google.com/maps?q=1790%20Dundas%20St%20%2315,%20London,%20ON%20N5W%203E5&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;