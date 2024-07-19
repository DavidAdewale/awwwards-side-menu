import { motion } from 'framer-motion';
import { footerLinks, links } from './data/navigationData';

import styles from './styles/navigation.module.css';
import { perspective, slideIn } from './data/anim';

function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        <div className={styles.mainNavLinks}>
          {links.map((link, i) => {
            return <SingleLink link={link} index={i} key={`b_${i}`} />;
          })}
        </div>
        <motion.div className={styles.footer}>
          {footerLinks.map((link, i) => {
            return <FooterLink link={link} index={i} key={`s_f${i}`} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}

function SingleLink({ link, index }) {
  const { title, href } = link;
  return (
    <div className={styles.linkContainer}>
      <motion.div
        href={href}
        custom={index}
        variants={perspective}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <a>{title}</a>
      </motion.div>
    </div>
  );
}

function FooterLink({ link, index }) {
  const { title, href } = link;

  return (
    <motion.a
      variants={slideIn}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {title}
    </motion.a>
  );
}

export default Navigation;
