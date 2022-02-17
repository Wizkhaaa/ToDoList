//TaskForm

import {ChangeEvent, FormEvent, useState} from "react";
import {AñadirTarjeta, AñadirTarjetaForm} from "./Estilos";
import {interfaceTarea} from "./Interfaces";

//La interface "propsAñadirTareas" tiene el parámetro "añadirTareas"
//El parámetro "añadirTareas" es de tipo función con un parámetro "tarea" con la estructura "interfaceTarea"
//Esta función no retorna ningún valor
interface propsAñadirTareas {
  añadirTareas:(tarea: interfaceTarea) => void
}

//Se crea un tipo "eventoActualizarTarjeta" el cual permite actualizar el "input" de tipo "text" y el "textarea"
type eventoActualizarTarjeta = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;

//Se crea un tipo "eventoGuardarTarjeta" el cual permite guardar la información en las tarjetas con el "form"
type eventoGuardarTarjeta = FormEvent<HTMLFormElement>;

//Se crea una constante "estadoInicial" que tendrá el estado inicial de donde se añadirá las tarjetas
const estadoInicial = {
  titulo: "",
  descripcion: ""
}

export default function AñadirTareas({añadirTareas}: propsAñadirTareas) {

  //El "useState" guarda el estado de "titulo" del "input" de tipo "text" y la "descripcion" de tipo "textarea"
  //El "titulo" y "descripcion" del "useState" se conectan con los objetos a modificar mediante el "name"
  //El estado de ambos elementos a modificar inicialmente están vacíos
  const [tarea, setTarea] = useState(estadoInicial);

  //Con "actualizar" se modficia "value" de "input" de tipo "text" o de la "descripcion" de tipo "textarea"
  //Dependiendo del "name" se modifica el "input" de tipo "text" o la "descripcion" de tipo "textarea"
  //Con "setTarea" se modifica el valor uno de los objetos a modificar
  //Con "...tarea" se pasa lo que tiene el otro objeto que no fue modificado para que no quede vacío
  const actualizar = ({target: {name, value}}: eventoActualizarTarjeta) => {
    setTarea({...tarea, [name]: value})
  }

  const guardar = (evento: eventoGuardarTarjeta) => {
    evento.preventDefault()
    añadirTareas(tarea)
    setTarea(estadoInicial)
  }

  return (
    //El "onChange" va modificando cualquiera de los dos objetos dependiendo del "name" que reciba
    <AñadirTarjeta>
      <h1>Añadir tarea</h1>
      {/*El "onSubmit" va guardando*/}
      <AñadirTarjetaForm onSubmit={guardar}>
        <input
          type="text"
          name="titulo"
          placeholder="Título..."
          onChange={actualizar}
          value={tarea.titulo}
        />
        <textarea
          name="descripcion"
          placeholder="Descripción..."
          rows={3}
          onChange={actualizar}
          value={tarea.descripcion}
        />
        <button>Guardar</button>
      </AñadirTarjetaForm>
    </AñadirTarjeta>
  );
}