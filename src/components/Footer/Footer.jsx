import React from "react";
import img from "../../img/logoFooter.png";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <section className={styles.footer_sections}>
        <nav className={styles.links}>
          <ul className={styles.links_nav}>
            <li className={styles.nav_link}>Home</li>
            <li className={styles.nav_link}>Create</li>
            <li className={styles.nav_link}>About</li>
          </ul>
        </nav>
        <picture className={styles.imgBox}>
          <img className={styles.img} src={img} alt="logo del footer del digimon bien piola" />
        </picture>
      </section>
      <p className={styles.copyrigth}>Todos los derechos reservados &copy.</p>
    </footer>
  );
};
