import React from "react";
import styles from "./CardDefault3.module.css";

export default function CardDefault3() {
  return (
    <div>
      <div className={styles.card}>
        <h5>Tarea</h5>
        <h6>Descripcion Minima</h6>
        <p>No existen tareas terminadas</p>
      </div>
    </div>
  );
}
