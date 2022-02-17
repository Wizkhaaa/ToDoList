//TaskList
import {interfaceTarea} from "./Interfaces";
import TarjetaTareas from "./TarjetaTareas";

//La interfaz "propsListaTareas" es la estructura importada de "interfaceTarea" pero como un arreglo
//Consta de un parámetro "listaTareas" con la estructura "interfaceTarea"
interface propsListaTareas {
  listaTareas: interfaceTarea[];
  eliminarTareas:(id:number) => void;
}

//A la función "ListaTareas" se le pasa el parámetro "listaTareas" de la interfaz "propsListaTareas"
//El parámetro "listaTareas" tiene la estructura como arreglo de "interfaceTarea"
export default function ListaTareas({listaTareas, eliminarTareas}: propsListaTareas) {
  return (
    <>
      {/*El parámetro "listaTareas" se va imprimiendo con los datos que hay en "TarjetaTareas"*/}
      {/*Los datos se van guardando en un parámetro "tarea" con el parámetro "tarjetaTareas"*/}
      {/*El parámetro "tarjetaTareas" tiene la estructura "interfaceTarea"*/}
      {listaTareas.map((tarea) => <TarjetaTareas tarjetaTareas={tarea} eliminarTareas={eliminarTareas} key={tarea.id}/>)}
    </>
  );
}