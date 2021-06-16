import request from "./request.js";
import rellenarGrafico from "./rellenoGrafico.js";
import imprimirTabla from "./imprimirTabla.js";
import init from "./init.js";
import logout from "./logout.js";
import login from "./login.js";
import verMas from "./verMas.js";

init();
login();
logout();

// Funcion principal para rellenar grafico y tabla
(async () => {
    let datos = await request('total')
    let datosFiltrados = datos.filter(dato => dato.active > 10000)
    rellenarGrafico(datosFiltrados);
    imprimirTabla(datos);
    verMas();
})();
