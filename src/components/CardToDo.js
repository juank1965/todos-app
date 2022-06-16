import React from "react";
import styles from "./CardToDo.module.css";

export default function CardToDo(props) {
  const handleClick = () => {
    let nuevoEstado;
    let id;
    if (props.tarea.estado === "pendiente") {
      nuevoEstado = "ejecucion";
      id = props.tarea.id;
    }
    if (props.tarea.estado === "ejecucion") {
      nuevoEstado = "completada";
      id = props.tarea.id;
    }
    props.change(id, nuevoEstado);
  };

  return (
    <div>
      <div
        className={
          props.tarea.estado === "pendiente"
            ? styles.card
            : props.tarea.estado === "ejecucion"
            ? styles.card1
            : styles.card2
        }
      >
        <h5>{props.tarea.nombre}</h5>
        <h6>{props.tarea.descripcion}</h6>
        <p>{props.tarea.detalle}</p>
        <button
          className={styles.btn}
          onClick={handleClick}
          display={props.tarea.estado === "completada" ? "none" : "block"}
        >
          {props.tarea.estado === "pendiente"
            ? "Mover a Ejecutar"
            : props.tarea.estado === "ejecucion"
            ? "Mover a Completada"
            : "Tarea Completada"}
        </button>
      </div>
    </div>
  );
}
