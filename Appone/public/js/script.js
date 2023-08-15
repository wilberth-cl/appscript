import { tabla }  from "./table.js";

const main = document.querySelector('main');
main.style.backgroundColor = 'red';
main.style.color = 'white';
main.style.border = '5px solid black';
/* main.style.paddingLeft='10px'; */
main.style.textAlign = "center";

const titulo = document.createElement('h1');
const text_titulo = document.createTextNode('AppScript');
titulo.appendChild(text_titulo);
main.appendChild(titulo);

const seccion = document.createElement('section');
const text_seccion = document.createTextNode('seccion');
seccion.appendChild(text_seccion);
main.appendChild(seccion);

const calzados = [
    ['Color', 'Talla', 'Genero'],
    ['rojo', 'CH', 'H'],
    ['azul', 'G', 'M']
];

const encabezados = calzados.splice(0,1);
const celdas = calzados;

//const mytable = "<h3> Soy un H3 </h3>";
const table = tabla(encabezados, celdas);
main.innerHTML += table; 
