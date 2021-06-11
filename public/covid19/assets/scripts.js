import request from "./request.js";
import rellenarGrafico from "./rellenoGrafico.js";
import imprimirTabla from "./imprimirTabla.js";
import rellenoModal from "./rellenoModal.js";


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

