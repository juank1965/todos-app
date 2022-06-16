import React from "react";
import styles from "./CardDefault1.module.css";

export default function CardDefault1() {
  return (
    <div>
      <div className={styles.card}>
        <h5>Tarea</h5>
        <h6>Descripcion Minima</h6>
        <p>En este momento no tiene tareas creadas</p>
        <button>Poner en ejecución</button>
      </div>
    </div>
  );
}
