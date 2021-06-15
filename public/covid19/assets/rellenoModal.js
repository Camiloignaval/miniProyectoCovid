import requestChile from "./requestChile.js";

const rellenoModal = async (pais) => {
    // Captura elementos del DOM
    let cuerpo = document.querySelector(`.modal-body`)
    cuerpo.innerHTML = ''
    let titulo = document.querySelector('.modal-title')
    titulo.innerHTML = `Detalles de ${pais}`
    // Se junta nombre de pais con _ entremedio
    let nombreJunto = pais.split(' ').join('_');
    let datos = await requestChile(nombreJunto);

    cuerpo.innerHTML = `<canvas id="graficoModal"></canvas>`

    // FORMA SIN FUNCIONES
    new Chart(document.getElementById(`graficoModal`), {
        type: 'bar',

        data: {
            labels: ["casos confirmados", "casos muertos", "casos recuperados", "Casos activos"],
            datasets: [
                {
                    label: pais,
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

export default rellenoModal;