
const getTotal = async (addLink) => {
    let response = await fetch(`http://localhost:3000/api/${addLink}`);
    let { data } = await response.json()
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
    let cuerpo = document.querySelector(`.modal-body`)
    cuerpo.innerHTML = ''

    let nombreJunto = pais.split(' ').join('%20');
    let datos = await getTotal(`countries/${nombreJunto}`);
    console.log(datos)
    console.log(datos)
    let titulo = document.querySelector('.modal-title')
    titulo.innerHTML = `Detalles de ${datos.location}`

    cuerpo.innerHTML = `<canvas id="graficoModal"></canvas>`

    // FORMA SIN FUNCIONES
    new Chart(document.getElementById(`graficoModal`), {
        type: 'bar',

        data: {
            labels: ["casos confirmados", "casos muertos", "casos recuperados", "Casos activos"],
            datasets: [
                {
                    label: datos.location,
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                    data: [datos.confirmed, datos.deaths, datos.recovered, datos.active]
                },

            ]
        },
        options: {
            title: {
                display: false,
                text: datos.location
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
    <td><button id='btn${dato.location}' type='button' class='verMas btn btn-primary' data-toggle="modal" data-target="#modal">Detalles</button></td>
</tr>

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

    rellenarGrafico(datosFiltrados, "graficoPrincipal")
    imprimirTabla(datos)


    // llamada a boton verMas
    let arrayBtns = document.querySelectorAll('.verMas');
    arrayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let pais = btn.id.slice(3)
            rellenoModal(pais)
        })
    });

}

funcionPrincipal()
