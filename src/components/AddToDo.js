import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./AddToDo.module.css";

export default function AddToDo(props) {
  const [tarea, setTarea] = useState({
    nombre: "",
    descripcion: "",
    detalle: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setTarea((prevToDo) => ({
      ...prevToDo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTarea = tarea;
    setTarea({ nombre: "", descripcion: "", detalle: "" });
    console.log(newTarea);
    props.addTarea(newTarea);
  };

  return (
    <nav className={styles.nav}>
      <h2>Agregar tarea</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre de la tarea"
          aria-label="text"
          name="nombre"
          value={tarea.nombre}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="descripción corta"
          aria-label="text"
          name="descripcion"
          value={tarea.descripcion}
          onChange={handleChange}
        />
        <textarea
          className={styles.input}
          placeholder="descripción larga"
          aria-label="text"
          name="detalle"
          value={tarea.detalle}
          onChange={handleChange}
        />
        <div>
          <button className={styles.btn} type="submit">
            Agregar Tarea
          </button>
          <button className={styles.btn}>
            <Link to="/">Volver</Link>
          </button>
        </div>
      </form>
    </nav>
  );
}
