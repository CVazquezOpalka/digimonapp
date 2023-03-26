import React, { useContext } from "react";
import styles from "./context.module.css";
import { DigimonContext } from "../../context/DigimonContext";
import { Card } from "../Card/Card";

export const ContextGrid = () => {
  const { allDigimon, loading } = useContext(DigimonContext);

  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        {loading ? (
          <h1>Cargandoo</h1>
        ) : (
          allDigimon.filter(e=>e.level === 'Rookie').map((e) => <Card key={e.name} digimon={e} />)
        )}
      </section>
    </main>
  );
};
