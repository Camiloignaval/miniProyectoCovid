import request from "./request.js";
import rellenarGrafico from "./rellenoGrafico.js";
import imprimirTabla from "./imprimirTabla.js";
import rellenoModal from "./rellenoModal.js";
import { postData, getData } from "./post_get.js";
import visibilidad from "./visibilidad.js";

let errorLogin = () => {

    document.getElementById('mensajeLogin').innerHTML = 'Credenciales incorrectas'

}

// Comprobacion siesque esta iniciado la sesion
const init = async () => {
    const token = localStorage.getItem('jsToken')
    if (token) {
        visibilidad()
    }
}

init();

// Funcion principal para rellenar grafico y tabla
(async () => {
    let datos = await request('total')
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

})();
// Evento para formulario
document.getElementById('formLogin').addEventListener('submit', async (event) => {
    event.preventDefault()
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPass').value;
    let JWT = await postData(email, password);
    // console.log(JWT);
    if (JWT) {
        visibilidad()
        $("#modalLogin").modal('hide');
    }
    else {
        errorLogin()
    }
})
// Evento para boton logout
document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear();
    location.reload();

})


