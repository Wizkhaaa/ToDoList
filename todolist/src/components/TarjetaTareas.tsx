//TaskCard

import {interfaceTarea} from "./Interfaces";
import {Tarjeta} from "./Estilos";

//La interfaz "propstarjetaTareas" es la estructura importada de "interfaceTarea"
//Consta de un parámetro "tarjetaTareas" con la estructura "interfaceTarea"
interface propsTarjetaTareas {
  tarjetaTareas: interfaceTarea;
  eliminarTareas:(id:number) => void;
}

//A la función "TarjetaTareas" se le pasa el parámetro "tarjetaTareas" de la interfaz "propsTarjetaTareas"
//El parámetro "tarjetaTareas" tiene la estructura "interfaceTarea"
export default function TarjetaTareas({tarjetaTareas, eliminarTareas}: propsTarjetaTareas) {
  return (
    <>
      {/*Se va sacando la información del parámetro "tarjetaTareas" con la estructura "interfaceTarea"*/}
      <Tarjeta>
          <h2>{tarjetaTareas.titulo}</h2>
          <p>{tarjetaTareas.descripcion}</p>
          <p>{tarjetaTareas.id}</p>
          <button onClick={() => tarjetaTareas.id && eliminarTareas(tarjetaTareas.id)}>Delete</button>
      </Tarjeta>
    </>
  );
}