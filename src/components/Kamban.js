import React from "react";
import CardToDo from "./CardToDo";
//import CardToDo from "./CardToDo";

export default function Kamban(props) {
  return (
    <div>
      <h2>Tablero kanban de tareas</h2>
      <div className="kamban">
        <div className="columna-kamban">
          <h3 className="columna-titulo">Pendientes</h3>
          <div>
            {
              // eslint-disable-next-line array-callback-return
              props.tareas.map((tarea) => {
                if (tarea.estado === "pendiente") {
                  return (
                    <CardToDo
                      key={tarea.id}
                      tarea={tarea}
                      change={props.chgEstado}
                    />
                  );
                }
              })
            }
          </div>
        </div>
        <div className="columna-kamban">
          <h3 className="columna-titulo">En ejecución</h3>
          <div>
            {
              // eslint-disable-next-line array-callback-return
              props.tareas.map((tarea) => {
                if (tarea.estado === "ejecucion") {
                  return (
                    <CardToDo
                      key={tarea.id}
                      tarea={tarea}
                      change={props.chgEstado}
                    />
                  );
                }
              })
            }
          </div>
        </div>
        <div className="columna-kamban">
          <h3 className="columna-titulo">Completadas</h3>
          <div>
            {
              // eslint-disable-next-line array-callback-return
              props.tareas.map((tarea) => {
                if (tarea.estado === "completada") {
                  return (
                    <CardToDo
                      key={tarea.id}
                      tarea={tarea}
                      change={props.chgEstado}
                    />
                  );
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
