const tabla = (encabezados, celdas) => {
    let table = '<table>';
    table += '<thead><tr>';

    encabezados[0].forEach((encabezado, index) => {
        table += '<th>' + encabezado + '</th>';
    });

    table += '</tr></thead>';
    table += '<tbody>';

    celdas.forEach((celda, index) => {
        table += '<tr>';
        celda.forEach((text, index) => {
            table += '<td>' + text + '</td>';
        });
        table += '</tr>';
    });

    table += '</tbody>';
    table += '</table>';

    return table;
}

export { tabla }