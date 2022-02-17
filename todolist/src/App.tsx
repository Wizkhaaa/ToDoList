import logo from "./images/logo.png";
import imgRutina from "./images/rutina.png";
import imgImportante from "./images/importante.png";
import imgPendiente from "./images/pendiente.png";
import imgTarea from "./images/tarea.png";
import {useState} from "react";
import {interfaceTarea} from "./components/Interfaces";
import ListaTareas from "./components/ListaTareas";
import AñadirTareas from "./components/AñadirTareas";
import {Nav, NavIzq, NavDer, Logo, NavSecciones, IconosNav} from "./components/Estilos";

interface interfaceDatos {
  titulo: string
}

export default function App({titulo}: interfaceDatos) {

  const [tareas, setTareas] = useState<interfaceTarea[]>([
    {
      id:1,
      titulo:"Tarea",
      descripcion:"Realizar la tarea",
    }
  ])

  //Se genera un "id"
  const idConFecha = ():number => new Date().getTime();

  //Eliminar tarea filtrando con su id, si el id es igual, no se filtra en el nuevo arreglo
  const eliminarTarea = (id:number) => setTareas(tareas.filter(tarea => tarea.id !== id));

  //Para añadir una tarea, se usa "añadirNuevaTarea" que recibe un parámetro "tarea" de tipo "interfaceTarea"
  //Esta nueva "tarea" se añade a las "tareas" del "useState" con "setTareas"
  //Se guarda lo que se tenía anteriormente con "...tareas"
  const añadirNuevaTarea = (tarea: interfaceTarea) => {
    setTareas([...tareas, {...tarea, id:idConFecha()}])
  }

  return (
    <div className="App">
      <Nav>
          <NavIzq>
            <h1>{titulo}</h1><Logo src={logo} alt="Logo ToDo"/>
          </NavIzq>
          <NavDer>
            <NavSecciones>
              <IconosNav src={imgRutina} alt="Logo ToDo"/><p>Mi rutina diaria</p>
            </NavSecciones>
            <NavSecciones>
              <IconosNav src={imgImportante} alt="Logo ToDo"/><p>Importantes</p>
            </NavSecciones>
            <NavSecciones>
              <IconosNav src={imgPendiente} alt="Logo ToDo"/><p>Pendientes</p>
            </NavSecciones>
            <NavSecciones>
              <IconosNav src={imgTarea} alt="Logo ToDo"/><p>Todas mis tareas</p>
            </NavSecciones>
          </NavDer>
      </Nav>
      <main>
        <AñadirTareas añadirTareas={añadirNuevaTarea}/>
        {/*Se va imprimiendo la "listaTareas" desde "ListaTareas"*/}
        {/*El arreglo "listaTareas" se le pasa el estado "tareas" del "useState" */}
        <ListaTareas listaTareas={tareas} eliminarTareas={eliminarTarea}></ListaTareas>
      </main>
    </div>
  );
}