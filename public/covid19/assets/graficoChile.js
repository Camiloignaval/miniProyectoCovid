const graficoChile = (confirmados, muertos, recuperados) => {
    let fechas = confirmados.map(confirmados => confirmados.date)
    let confirmado = confirmados.map(confirmados => confirmados.total)
    let muerto = muertos.map(muertos => muertos.total)
    let recuperado = recuperados.map(recuperados => recuperados.total)


    new Chart(document.getElementById('graficoChile'), {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [
                {
                    label: "Confirmados",
                    backgroundColor: "#fcba03",
                    data: confirmado
                }, {
                    label: "Muertos",
                    backgroundColor: "#b5b5b5",
                    data: muerto
                }, {
                    label: "Recuperados",
                    backgroundColor: "#003d99",
                    data: recuperado
                },
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

export default graficoChile;