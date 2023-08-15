const main = document.querySelector('main');
main.style.backgroundColor='red';
main.style.color='white';
main.style.border='5px solid black';
/* main.style.paddingLeft='10px'; */
main.style.textAlign="center";

let titulo = document.createElement('h1');
let text_titulo = document.createTextNode('AppScript');
titulo.appendChild(text_titulo);
main.appendChild(titulo);

let seccion = document.createElement('section');
let text_seccion = document.createTextNode('seccion');
seccion.appendChild(text_seccion);
main.appendChild(seccion);

let table = document.createElement('table');
let tr = document.createElement('tr');
let thead = document.createElement('thead');
let th = document.createElement('th');
let tbody = document.createElement('tbody');
let td =  document.createElement('td');

text00 = document.createTextNode('col 1');
th00 = th.appendChild(text00);
tr00 = tr.appendChild(th00);
thead.appendChild(tr00);

text01 =  document.createTextNode('texto col 1');
td01 = td.appendChild(text01);
tr01 = tr.appendChild(td01);
tbody.appendChild(tr01);

text10 = document.createTextNode('col 2');
th10 = th.appendChild(text10);
tr10 = tr.appendChild(th10);
thead.appendChild(tr10);

text11 = document.createTextNode('text col 2');
td11 = td.appendChild(text11);
tr11 = tr.appendChild(td11);
tbody.appendChild(tr11);

table.appendChild(thead);
table.appendChild(tbody);
main.appendChild(table);

let mytable = "<h3> Soy un H3 </h3>";
main.innerHTML += mytable;
