import { motion } from 'framer-motion';
import styles from './styles/button.module.css';

function Button({ isActive, toggleMenu }) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <ButtonActual label="Menu" toggleMenu={toggleMenu} />
        <ButtonActual label="Close" toggleMenu={toggleMenu} />
      </motion.div>
    </div>
  );
}

function ButtonActual({ label, toggleMenu }) {
  return (
    <button className={styles.el} onClick={() => toggleMenu()}>
      <PerspectiveText label={label} />
    </button>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default Button;
