import React, { useContext } from "react";
import styles from "./context.module.css";
import { DigimonContext } from "../../context/DigimonContext";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";

export const ContextGrid = () => {
  const { allDigimon, loading } = useContext(DigimonContext);

  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        {loading ? (
          <Loader/>
        ) : (
          allDigimon.map((e) => <Card key={e.name} digimon={e} />)
        )}
      </section>
    </main>
  );
};
