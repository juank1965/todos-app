import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import imagen from "../assets/favicon/favicon-32x32.png";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <div>
        <NavLink to="/addtodo">
          <button className={styles.btn}>
            <img src={imagen} width="30" height="24" alt="logo" />
            Agregar Tarea
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
