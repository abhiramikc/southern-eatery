import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaUtensils, FaDrumstickBite, FaFish, FaTag } from 'react-icons/fa';
import styles from './FeaturedMenu.module.css';

// Import menu images
import unnamed from '../../assets/unnamed.jpg';
import unnamed2 from '../../assets/unnamed-2.jpg';
import unnamed3 from '../../assets/unnamed-3.jpg';
import unnamed4 from '../../assets/unnamed-4.jpg';
import unnamed6 from '../../assets/unnamed-6.jpg';
import unnamed7 from '../../assets/unnamed-7.jpg';
import unnamed8 from '../../assets/unnamed-8.jpg';
import unnamed9 from '../../assets/unnamed-9.jpg';

const categories = [
  { id: 'meat', name: 'Meat Specialties', icon: FaDrumstickBite },
  { id: 'seafood', name: 'Seafood Specials', icon: FaFish },
  { id: 'meals', name: 'Traditional Meals', icon: FaUtensils },
  { id: 'promos', name: 'Promotional Offers', icon: FaTag },
];

const menuItems = {
  meat: [
    {
      name: 'Beef Fry',
      description: 'Traditional Kerala style slow-roasted beef with coconut bites and aromatic spices',
      price: '$12.99',
      image: unnamed4
    },
    {
      name: 'Beef Roast',
      description: 'Spiced beef cubes slow-cooked in a rich onion-tomato gravy with curry leaves',
      price: '$12.99',
      image: unnamed
    },
    {
      name: 'Mutton Roast',
      description: 'Tender mutton cooked in freshly ground spices, roasted with coconut oil',
      price: '$15.99',
      image: unnamed2
    },
    {
      name: 'Chicken 65',
      description: 'Crispy, deep-fried chicken chunks marinated with ginger, garlic, and red chilies',
      price: '$9.99',
      image: unnamed3
    },
    {
      name: 'Chicken Curry',
      description: 'Traditional Kerala chicken curry simmered in a coconut milk-based gravy',
      price: '$11.99',
      image: unnamed6
    },
    {
      name: 'Chicken Roast',
      description: 'Chicken pieces slow-roasted in a semi-dry gravy of onions, tomatoes, and spices',
      price: '$12.99',
      image: unnamed7
    }
  ],
  seafood: [
    {
      name: 'Meen Curry Mulakittath',
      description: 'Fiery red Kerala fish curry cooked with camboge (kudampuli) and hot spices',
      price: '$14.99',
      image: unnamed8
    },
    {
      name: 'Sardine Fry',
      description: 'Fresh sardines marinated in traditional spices and shallow fried to crispy perfection',
      price: '$8.99',
      image: unnamed9
    },
    {
      name: 'Mackerel Fry',
      description: 'Mackerel fish coated in a spicy red chili paste and pan-fried',
      price: '$9.99',
      image: unnamed
    },
    {
      name: 'Anchovy Fry',
      description: 'Crispy fried small anchovies marinated in a spicy Kerala spice mix',
      price: '$8.99',
      image: unnamed2
    }
  ],
  meals: [
    {
      name: 'Fish Curry Meals',
      description: 'Traditional Kerala feast served with red rice, fish curry, side dishes, pickle, and pappadam',
      price: '$13.99',
      image: unnamed4
    }
  ],
  promos: [
    {
      name: 'Beef Roast (Promo)',
      description: 'Special promotional offer: Spiced beef cubes slow-cooked in a rich onion-tomato gravy',
      price: '$4.99',
      image: unnamed
    },
    {
      name: 'Butter Chicken (Promo)',
      description: 'Special promotional offer: Creamy tomato gravy with tender grilled chicken pieces',
      price: '$4.99',
      image: unnamed3
    },
    {
      name: 'Mutton Roast (Promo)',
      description: 'Special promotional offer: Succulent mutton roasted in a rich spice blend',
      price: '$6.99',
      image: unnamed2
    }
  ]
};

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('meat');
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="menu" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.label}>
            <span className={styles.line} />
            <span>Our Menu</span>
          </div>
          <h2 className={styles.title}>Culinary <span>Masterpieces</span></h2>
          <p className={styles.subtitle}>Each dish is crafted with precision and passion</p>
        </motion.div>

        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.tab} ${activeCategory === cat.id ? styles.activeTab : ''}`}
            >
              <cat.icon className={styles.tabIcon} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={styles.grid}
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.imageOverlay} />
                  <span className={styles.price}>{item.price}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.dishName}>{item.name}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedMenu;