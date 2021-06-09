
const getTotal = async (addLink) => {
    let response = await fetch(`http://localhost:3000/api/${addLink}`);
    let { data } = await response.json()
    // console.log(data)
    return data
}

const rellenarGrafico = (datos, id) => {
    let nombres = datos.map(pais => pais.location)

    let activos = datos.map(pais => pais.confirmed)
    let confirmados = datos.map(pais => pais.deaths)
    let muertos = datos.map(pais => pais.recovered)
    let recuperados = datos.map(pais => pais.active)

    new Chart(document.getElementById(id), {
        type: 'bar',
        data: {
            labels: nombres,
            datasets: [
                {
                    label: "Casos activos",
                    backgroundColor: "#CB2E2E",
                    data: activos
                }, {
                    label: "casos confirmados",
                    backgroundColor: "#F0D522",
                    data: confirmados
                }, {
                    label: "casos muertos",
                    backgroundColor: "#939393",
                    data: muertos
                }, {
                    label: "casos recuperados",
                    backgroundColor: "#22A5F0",
                    data: recuperados
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Population growth (millions)'
            }
        }
    });

}

const rellenoModal = async (pais) => {
    let nombreJunto = pais.split(' ').join('');
    // console.log(nombreJunto);
    let datos = await getTotal(`countries/${nombreJunto}`);
    console.log(datos)
    // rellenarGrafico(datos, `graficoModal${datos.location}`)
    // FORMA SIN FUNCIONES
    new Chart(document.getElementById(`graficoModal${datos.Location}`), {
        type: 'bar',
        data: {
            labels: datos.Location,
            datasets: [
                {
                    label: "Casos activos",
                    backgroundColor: "#CB2E2E",
                    data: datos.active
                }, {
                    label: "casos confirmados",
                    backgroundColor: "#F0D522",
                    data: datos.confirmed
                }, {
                    label: "casos muertos",
                    backgroundColor: "#939393",
                    data: datos.deaths
                }, {
                    label: "casos recuperados",
                    backgroundColor: "#22A5F0",
                    data: datos.recovered
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Population growth (millions)'
            }
        }
    });

}


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
                    <canvas id="graficoModal${dato.location}"  width="400" height="400"></canvas>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
`
    }).join('');

    tabla.innerHTML = relleno;
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
    // let dato = await getTotal('countries/SolomonIslands')
    // console.log(dato)

    console.log(datosFiltrados)
    rellenarGrafico(datosFiltrados, "graficoPrincipal")
    imprimirTabla(datos)
    // rellenoModal('India')

}

funcionPrincipal()

