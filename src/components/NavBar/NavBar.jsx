import React from "react";
import styles from "./nav.module.css";
import img from "../../img/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className={styles.container_navbar}>
      <picture className={styles.imgBox}>
        <img src={img} alt="logo de digimon" />
      </picture>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_container}>
          <li>
            <Link to="/" style={{ color: "white" }}>
              home
            </Link>
          </li>
          <li>
            <Link to="/create" style={{ color: "white" }}>
              Create
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "white" }}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
