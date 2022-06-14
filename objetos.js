const datosPersonales = {
  nombre: "Eduardo",
  apellido: "Marcet",
  edad: 49,
  altura: 1.7,
  eresDesarrollador: true,
};
const edad = datosPersonales.edad;

const listaDatos = [
  { ...datosPersonales },
  {
    nombre: "Adrián",
    apellido: "Gallegos",
    edad: 51,
    altura: 1.7,
    eresDesarrollador: false,
  },
  {
    nombre: "Juan Carlos",
    apellido: "Jiménez",
    edad: 52,
    altura: 2.1,
    eresDesarrollador: false,
  },
];

const listaOrdenada = listaDatos.sort((a, b) => b.edad - a.edad);

console.log(edad);
console.log(listaOrdenada);
