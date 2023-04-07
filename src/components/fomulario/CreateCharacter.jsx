import React, { useState } from "react";
import styles from "./create.module.css";
import img from "../../assets/logofoto.png";
import { useForm } from "react-hook-form";

export const CreateCharacter = () => {
  const [nuevo, setNuevo] = useState([]);
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const insertar = () =>{
    
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(insertar)} className={styles.form}>
        <div className={styles.containerImg}>
          <img src={img} alt="" />
          <a href="">carga una foto</a>
        </div>
        <div className={styles.containerName}>
          <h4>Nombre:</h4>
          <input
            type="text"
            placeholder=" Nombre del digimon"
            {...register("nombre", { required: true,maxLength:20 })}
          />
          {errors.nombre?.type==="required" && (<p> ingrese un nombre</p>)}
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
          <button>Crear personaje</button>
        </div>
      </form>
    </div>
  );
};
