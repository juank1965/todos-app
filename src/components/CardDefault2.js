import React from "react";
import styles from "./CardDefault2.module.css";

export default function CardDefault2() {
  return (
    <div>
      <div className={styles.card}>
        <h5>Tarea</h5>
        <h6>Descripcion Minima</h6>
        <p>En este momento no hay tareas en ejecución</p>
        <button>Poner en Completadas</button>
      </div>
    </div>
  );
}
