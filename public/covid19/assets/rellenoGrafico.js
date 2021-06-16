const rellenarGrafico = (datos) => {
    let nombres = datos.map(pais => pais.location)
    let activos = datos.map(pais => pais.confirmed)
    let confirmados = datos.map(pais => pais.deaths)
    let muertos = datos.map(pais => pais.recovered)
    let recuperados = datos.map(pais => pais.active)

    new Chart(document.getElementById("graficoPrincipal"), {
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

export default rellenarGrafico;