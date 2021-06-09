
const getTotal = async (addLink) => {
    let response = await fetch(`http://localhost:3000/api/${addLink}`);
    let { data } = await response.json()
    // console.log(data)
    return data
}

// const grafico = (data) => {
//     let ctx = document.getElementById('grafico')
//     let barChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: data.map((el) => el.location),
//             datasets: [{
//                 label: 'life expectancy (years)',
//                 backgroundColor: 'rgba(128,164,237, 0.8)',
//                 borderColor: 'rgba(128,164,237, 1)',
//                 data: dataset.map((el) => el.confirmed)
//             }]
//         }
//     })
//     ctx.innerHTML = barChart
// }

const imprimirTabla = (array) => {
    let tabla = document.getElementById('cuerpoTabla');
    let relleno = array.map(dato => {
        return ` <tr>
    <th>${dato.location}</th>
    <td>${dato.confirmed}</td>
    <td>${dato.deaths}</td>
    <td>${dato.recovered}</td>
    <td>${dato.active}</td>
    <td><button class='verMas btn btn-primary' data-toggle="modal" data-target="#modal${dato.location}">Detalles</button></td>
</tr>
<div class="modal" id="modal${dato.location}" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalles de ${dato.location}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${dato.active}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
` }).join('');

    tabla.innerHTML = relleno;
}

const rellenoModal = (pais) => {

}

btnsVer = document.querySelectorAll('.verMas')
btnsVer.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.modal-title').innerHTML = 'datos'
    })
});

let funcionPrincipal = async () => {
    let datos = await getTotal('total')
    let datosFiltrados = datos.filter(dato => dato.active > 10000)
    console.log(datosFiltrados)
    // grafico(datosFiltrados)
    imprimirTabla(datos)

}

funcionPrincipal()

