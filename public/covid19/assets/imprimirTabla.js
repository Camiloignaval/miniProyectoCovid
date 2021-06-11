
const imprimirTabla = (array) => {
    let tabla = document.getElementById('cuerpoTabla');
    let relleno = array.map(dato => {
        return ` <tr>
    <th>${dato.location}</th>
    <td>${dato.confirmed}</td>
    <td>${dato.deaths}</td>
    <td>${dato.recovered}</td>
    <td>${dato.active}</td>
    <td><button id='btn${dato.location}' type='button' class='verMas btn btn-primary' data-toggle="modal" data-target="#modal">Detalles</button></td>
</tr>`
    }).join('');
    tabla.innerHTML = relleno;

}

export default imprimirTabla;