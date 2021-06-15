import graficoChile from "./graficoChile.js";
import { postData, getData } from "./post_get.js";
// import graficoChile from "./graficoChile.js";

const filtrar = (array) => array.filter((el, i) => i % 20 == 0);


(async () => {
    let jwt = localStorage.getItem('jsToken')
    const confirmados = await getData(jwt, 'http://localhost:3000/api/confirmed');
    let confFilt = filtrar(confirmados)
    // console.log(confFilt);
    const muertos = await getData(jwt, 'http://localhost:3000/api/deaths');
    let muertosFilt = filtrar(muertos)
    // console.log(muertosFilt);
    const recuperados = await getData(jwt, 'http://localhost:3000/api/recovered');
    let recFilt = filtrar(recuperados)
    // console.log(recFilt);
    // console.log(datos)
    graficoChile(confirmados, muertos, recuperados)



})();

document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear();
    // location.reload();

})