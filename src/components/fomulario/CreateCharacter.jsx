import React from "react";
import styles from "./create.module.css";

export const CreateCharacter = () => {
  return <div className={styles.container}>
    <form action="" className={styles.form}>
        <div className={styles.containerImg}>
            <h3>ingresa una imagen</h3>
            <a href="">browser</a>
        </div>
        <div className={styles.containerName}>
            <h4>Nombre:</h4>
            <input type="text" />

        </div>
        <div className={styles.containerLevel}>
            <h4>Nivel</h4>
            <select name="" id="">
                <option value="">Rookie</option>
                <option value="">Champion</option>
                <option value="">Mega</option>
            </select>
        </div>
        <div className={styles.btn}>
            <button>
                Crear personaje
            </button>
        </div>
    </form>
  </div>;
};
