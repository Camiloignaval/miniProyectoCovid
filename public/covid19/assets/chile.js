import graficoChile from "./graficoChile.js";
import { postData, getData } from "./post_get.js";
// import graficoChile from "./graficoChile.js";

// const filtrar = (array) => array.filter((el, i) => i % 20 == 0);


(async () => {
    let jwt = localStorage.getItem('jsToken')
    const confirmados = await getData(jwt, 'http://localhost:3000/api/confirmed');
    // Se filtran pero no mejora nada, ya que la demora es por la consulta.
    // let confFilt = filtrar(confirmados)
    // console.log(confFilt);
    const muertos = await getData(jwt, 'http://localhost:3000/api/deaths');
    const recuperados = await getData(jwt, 'http://localhost:3000/api/recovered');

    graficoChile(confirmados, muertos, recuperados)



})();
// boton cerrar sesion
document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear();

})