import "./App.css";
import Kamban from "./components/Kamban";
import NavBar from "./components/NavBar";
import AddToDo from "./components/AddToDo";
import { Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  let agregaTarea = (tarea) => {
    tarea["id"] = tareas.length + 1;
    tarea["estado"] = "pendiente";
    console.log(tarea);
    setTareas((prevTareas) => [...prevTareas, tarea]);
  };

  let changeEstado = (id, estado) => {
    setTareas((prevTareas) => {
      let nuevasTareas = prevTareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.estado = estado;
        }
        return tarea;
      });
      return nuevasTareas;
    });
  };

  return (
    <div className="App">
      <h1>App de tareas</h1>
      <NavBar />
      <Route
        path="/addtodo"
        render={() => <AddToDo addTarea={agregaTarea} />}
      />

      <Route exact path={"/"}>
        <Kamban tareas={tareas} chgEstado={changeEstado} />
      </Route>
    </div>
  );
}

export default App;
