import React from "react";
import styles from "./card.module.css";

export const Card = ({ digimon }) => {
  return (
    <article className={styles.card_container}>
      <picture className={styles.card_imgBox}>
        <img className={styles.card_img} src={digimon.img} alt={digimon.name} />
      </picture>
      <section className={styles.card_section}>
        <h2 className={styles.section_name}>
          {digimon.name.length > 10 ? digimon.name.slice(0, 10) + "..." : digimon.name}
        </h2>
        <p className={styles.section_level}>#{digimon.level}</p>
      </section>
    </article>
  );
};
